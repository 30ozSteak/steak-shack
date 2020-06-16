import React, { createContext, useState, useEffect } from "react"
import Client from "shopify-buy"

const client = Client.buildClient({
  domain: "nicks-steak-n-shake.myshopify.com",
  storefrontAccessToken: "088a5b7e7fd03d328579a8c85c4d2aa9",
})

const defaultValues = {
  isCartOpen: false,
  cart: [],
  addProductToCart: () => {
    console.log("added!")
  },
  client,
}

export const StoreContext = createContext(defaultValues)

export const StoreProvider = ({ children }) => {
  const [checkoutId, setCheckoutId] = useState({})

  useEffect(() => {
    initializeCheckout()
  }, [])

  const initializeCheckout = async () => {
    try {
      const newCheckout = await client.checkout.create()
      setCheckoutId(newCheckout.id)
    } catch (e) {}
  }

  const addProductToCart = async variantId => {
    try {
      // const newCheckout = await client.checkout.create()
      const lineItems = [
        {
          variantId,
          quantity: 1,
        },
      ]

      const addItems = await client.checkout.addLineItems(checkoutId, lineItems)

      // console.log(addItems.webUrl)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <StoreContext.Provider value={{ ...defaultValues, addProductToCart }}>
      {children}
    </StoreContext.Provider>
  )
}
