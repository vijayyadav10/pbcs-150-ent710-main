import axios from "axios";
import { addAuthorizationRequestConfig } from "./Integration";

export const getData = async (url, id) => {
    url = mergeUrl(url, id)

    const data = await axios
        .get(url, addAuthorizationRequestConfig())
        .then((res) => {
            return res.data
        })
        .catch((e) => {
            return e
        })

    return errorCheck(data)
}

// creates a new record of any type (organisation, category, bundle or bundle group). If an ID is provided it modifies the record with the same ID
export const postData = async (url, payload) => {
    url = mergeUrl(url)
    const data = await axios
      .post(url, payload, addAuthorizationRequestConfig())
      .then((res) => {
        return res
      })
      .catch((e) => {
        return e
      })
    return errorCheck(data)
  }

// edits a record. If an ID is provided it modifies the record with the same ID
export const putData = async (url, payload) => {
  url = mergeUrl(url)
  const data = await axios
    .put(url, payload, addAuthorizationRequestConfig())
    .then((res) => {
      return res
    })
    .catch((e) => {
      return e
    })
  return errorCheck(data)
}

  export const deleteData = async (url, id) => {
    url = mergeUrl(url, id)

    const data = await axios
        .delete(url, addAuthorizationRequestConfig())
        .then((res) => {
            return res.data
        })
        .catch((e) => {
            return e
        })

    return errorCheck(data)
}

// if an ID is present, it modifies the url by merging it with the ID
const mergeUrl = (url, id) => {
    if (id) {
        url = `${url}${id}`
    }

    return url
}


// checks if the input data is an error and returns the data enhanced with a boolean
const errorCheck = (data) => {
    let isError = false

    if (data.hasOwnProperty("toJSON") && data.toJSON().name === "Error") {
        isError = true
    }

    return {
        data,
        isError,
    }
}