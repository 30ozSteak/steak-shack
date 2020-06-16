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
  checkout: {
    lineItems: [],
  },
}

export const StoreContext = createContext(defaultValues)

export const StoreProvider = ({ children }) => {
  const [checkout, setCheckout] = useState(defaultValues.checkout)

  useEffect(() => {
    initializeCheckout()
  }, [])

  const initializeCheckout = async () => {
    try {
      // check if its a browser
      const isBrowser = typeof window !== "undefined"

      // check if id exists
      const currentCheckoutId = isBrowser
        ? localStorage.getItem("checkout_id")
        : null

      // initializing variable
      let newCheckout = null

      // if id exists, fetch checkout from shopify
      if (currentCheckoutId) {
        newCheckout = await client.checkout.fetch(currentCheckoutId)
      } else {
        // then, if it doesnt exist, create new checkout

        newCheckout = await client.checkout.create()
        if (isBrowser) {
          localStorage.setItem("checkout_id", newCheckout.id)
        }
      }

      // set checkout to state
      setCheckout(newCheckout)
    } catch (e) {}
  }

  const addProductToCart = async variantId => {
    try {
      const lineItems = [
        {
          variantId,
          quantity: 1,
        },
      ]
      const newCheckout = await client.checkout.addLineItems(
        checkout.id,
        lineItems
      )
      // Buy Now Button Code
      // window.open(addItems.webUrl, "_blank")
      // console.log(addItems.webUrl)
      setCheckout(newCheckout)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <StoreContext.Provider
      value={{ ...defaultValues, checkout, addProductToCart }}
    >
      {children}
    </StoreContext.Provider>
  )
}
