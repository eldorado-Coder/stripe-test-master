import { NextPage, GetStaticProps } from 'next'
import Layout from '../components/Layout'

import Cart from '../components/Cart'
import CartSummary from '../components/CartSummary'
import Products from '../components/Products'
import formatStripeData from '../utils/get-stripe-price'

interface Props {

  priceData?: string,
}

const DonatePage: NextPage<Props> = (props) => {
  return (
    <Layout title="Shopping Cart | Next.js + TypeScript Example">
      <div className="page-container">
        <h1>Shopping Cart</h1>
        <p>
          Powered by the{' '}
          <a href="https://useshoppingcart.com">use-shopping-cart</a> React
          hooks library.
        </p>
        <Cart>
          <CartSummary />
          <Products priceData={props.priceData}/>
        </Cart>
      </div>
    </Layout>
  )
}

export default DonatePage

export const getStaticProps: GetStaticProps = async () => {
  const priceData = await formatStripeData()

  return {
    props: {
      priceData
    },
    revalidate: 10
  }
}