import { NextPage, GetStaticProps } from 'next'
import Layout from '../components/Layout'
import React, { useEffect, useState, useContext } from "react";
import Cart from '../components/Cart'
import CartSummary from '../components/CartSummary'
import Products from '../components/Products'
import formatStripeData from '../utils/get-stripe-price'
import Nav from '../components/common/Nav'
import {UserContext} from '../context'


interface Props {
  priceData?: string;
}

const IndexPage: NextPage<Props> = (props) => {
  const [state, setSate] = useContext(UserContext)
  return (
    <>
    <Layout>

      <div className="page-container">
        <h1>Shopping Cart</h1>
        <Cart>
          <CartSummary />
          <Products priceData={props.priceData} />
        </Cart>
      </div>
    </Layout>
    </>
  )
}

export default IndexPage

export const getStaticProps: GetStaticProps = async () => {
  const priceData = await formatStripeData()

  return {
    props: {
      priceData
    },
    revalidate: 10
  }
}