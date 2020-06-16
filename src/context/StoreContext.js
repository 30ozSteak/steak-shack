import React, { createContext, useState } from "react"
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
  return (
    <StoreContext.Provider value={defaultValues}>
      {children}
    </StoreContext.Provider>
  )
}
