import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Layout from '../components/Layout'
import PrintObject from '../components/PrintObject'
import Cart from '../components/Cart'
import ClearCart from '../components/ClearCart'

import { fetchGetJSON } from '../utils/api-helpers'
import useSWR from 'swr'
import axios from 'axios'

const ResultPage: NextPage = () => {
  const router = useRouter()

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  let { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON
  )
  

  if (error) return <div>failed to load</div>

  

  const submitStripInfo = async () =>{
    if(data == undefined){
      return;
    }
    const token1 = JSON.parse(localStorage.getItem('auth')!);
    // console.log("token", );
    
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/create-subscription',
      data : data,
      headers : {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        Authorization: 'Bearer ' + token1.token
      }
    }).then(res => {
        console.log("response", res.data.result);
        data = undefined;
        alert(res.data.result);
        
      }).catch((error) => {
        console.log("error", error);
        
      });
    
  }
  
  submitStripInfo();

  return (
    <Layout title="Checkout Payment Result | Next.js + TypeScript Example">
      <div className="page-container">
        <h1>Checkout Payment Result</h1>
        <h2>Status: {data?.payment_intent?.status ?? 'loading...'}</h2>
        <h3>CheckoutSession response:</h3>
        <PrintObject content={data ?? 'loading...'} />
        <Cart>
          <ClearCart />
        </Cart>
      </div>
    </Layout>
  )
}

export default ResultPage