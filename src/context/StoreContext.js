import React, { createContext, useState, useEffect } from "react"
import Client from "shopify-buy"

const client = Client.buildClient({
  domain: "nicks-steak-n-shake.myshopify.com",
  storefrontAccessToken: "088a5b7e7fd03d328579a8c85c4d2aa9",
})

const defaultValues = {
  isCartOpen: false,
  isLoading: false,
  toggleCartOpen: () => {},
  cart: [],
  addProductToCart: () => {},
  checkCoupon: () => {},
  removeProductFromCart: () => {},
  client,
  checkout: {
    lineItems: [],
  },
}

export const StoreContext = createContext(defaultValues)

const isBrowser = typeof window !== "undefined"

export const StoreProvider = ({ children }) => {
  const [checkout, setCheckout] = useState(defaultValues.checkout)
  const [isCartOpen, setCartOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const toggleCartOpen = () => setCartOpen(!isCartOpen)

  useEffect(() => {
    initializeCheckout()
  }, [])

  const getNewId = async () => {
    try {
      const newCheckout = await client.checkout.create()
      if (isBrowser) {
        localStorage.setItem("checkout_id", newCheckout.id)
      }
      return newCheckout
    } catch (e) {
      console.error(e)
    }
  }

  const initializeCheckout = async () => {
    try {
      // check if its a browser

      // check if id exists
      const currentCheckoutId = isBrowser
        ? localStorage.getItem("checkout_id")
        : null

      let newCheckout = null

      if (currentCheckoutId) {
        newCheckout = await client.checkout.fetch(currentCheckoutId)
        if (newCheckout.completedAt) {
          newCheckout = await getNewId()
        }
      } else {
        newCheckout = await getNewId()
      }

      setCheckout(newCheckout)
    } catch (e) {
      console.error(e)
    }
  }

  const addProductToCart = async variantId => {
    try {
      setIsLoading(true)
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
      setCheckout(newCheckout)
      setCheckout(false)
    } catch (e) {
      console.error(e)
    }
  }
  const removeProductFromCart = async lineItemId => {
    try {
      const newCheckout = await client.checkout.removeLineItems(checkout.id, [
        lineItemId,
      ])
      setCheckout(newCheckout)
    } catch (e) {
      console.error(e)
    }
  }

  const checkCoupon = async coupon => {
    setIsLoading(true)
    const newCheckout = await client.checkout.addDiscount(checkout.id, coupon)
    setCheckout(newCheckout)
    setIsLoading(false)
  }

  const removeCoupon = async coupon => {
    setIsLoading(true)
    const newCheckout = await client.checkout.removeDiscount(
      checkout.id,
      coupon
    )
    setCheckout(newCheckout)
    setIsLoading(false)
  }

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        checkout,
        addProductToCart,
        removeProductFromCart,
        toggleCartOpen,
        isCartOpen,
        checkCoupon,
        removeCoupon,
        isLoading,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
