import axios from "axios"

let jwtToken = ""

const loginUser = async (_, res) => {
  try {
    const response = await axios.post(
      "https://apiconnect.angelbroking.com/rest/auth/angelbroking/user/v1/loginByPassword",
      {
        clientcode: process.env.clientCode,
        password: clientPin,
        totp: totp,
      }
    )

    jwtToken = response.data.data.jwtToken

    res.json({ jwtToken })
  } catch (error) {
    console.error("Error authenticating with AngelOne:", error)
    res.status(500).json({ error: "Internal server error" })
  }
}

const getProfile = async (_, res) => {
  try {
    const response = await axios.get(
      "https://apiconnect.angelbroking.com/rest/secure/angelbroking/user/v1/getProfile",
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    )

    const userProfile = response.data.data

    res.json(userProfile)
  } catch (error) {
    console.error("Error fetching user profile:", error)
    res.status(500).json({ error: "Internal server error" })
  }
}

// Place buy order endpoint
const buyOrder = async (_, res) => {
  try {
    const orderDetails = {
      symbol: "SBIN-EQ",
      exchange: "NSE",
      transaction_type: "BUY",
      quantity: 10,
      order_type: "MKT",
      product_type: "INTRADAY",
      price: 0,
      disclosed_quantity: 0,
      trigger_price: 0,
      validity: "DAY",
      squareoff: 0,
      stoploss: 0,
      trailing_stoploss: 0,
    }

    const response = await axios.post(
      "https://apiconnect.angelbroking.com/rest/secure/angelbroking/order/v1/placeOrder",
      orderDetails,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
          "X-UserType": "USER",
          "X-SourceID": "WEB",
          "X-ClientLocalIP": "CLIENT_LOCAL_IP",
          "X-ClientPublicIP": "CLIENT_PUBLIC_IP",
          "X-MACAddress": "MAC_ADDRESS",
          "X-PrivateKey": process.env.apiKey,
        },
      }
    )

    res.json(response.data)
  } catch (error) {
    console.error("Error placing buy order:", error)
    res.status(500).json({ error: "Internal server error" })
  }
}

// Sell Order API
const sellOrder = async (_, res) => {
  try {
    const orderDetails = {
      variety: "NORMAL",
      tradingsymbol: "SBIN-EQ",
      exchange: "NSE",
      transactiontype: "SELL",
      ordertype: "MARKET",
      producttype: "INTRADAY",
      duration: "DAY",
      quantity: 1,
    }

    const response = await axios.post(
      "https://apiconnect.angelbroking.com/rest/secure/angelbroking/order/v1/placeOrder",
      orderDetails,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
          "X-UserType": "USER",
          "X-SourceID": "WEB",
          "X-ClientLocalIP": "CLIENT_LOCAL_IP",
          "X-ClientPublicIP": "CLIENT_PUBLIC_IP",
          "X-MACAddress": "MAC_ADDRESS",
          "X-PrivateKey": process.env.apiKey,
        },
      }
    )

    res.json(response.data)
  } catch (error) {
    console.error("Error placing sell order:", error)
    res.status(500).json({ error: "Internal server error" })
  }
}

// Get Current Holdings
const getCurrentHoldings = async (_, res) => {
  try {
    const response = await axios.get(
      "https://apiconnect.angelbroking.com/rest/secure/angelbroking/portfolio/v1/getPortfolioPositions",
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
          "X-UserType": "USER",
          "X-SourceID": "WEB",
          "X-ClientLocalIP": "CLIENT_LOCAL_IP",
          "X-ClientPublicIP": "CLIENT_PUBLIC_IP",
          "X-MACAddress": "MAC_ADDRESS",
          "X-PrivateKey": process.env.apiKey,
        },
      }
    )

    const holdings = response.data.data

    res.json(holdings)
  } catch (error) {
    console.error("Error fetching current holdings:", error)
    res.status(500).json({ error: "Internal server error" })
  }
}

export { loginUser, getProfile, buyOrder, sellOrder, getCurrentHoldings }
