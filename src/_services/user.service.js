// User service encapsulates all backend api for performing crud operations on user data, as well as logging in and out
import config from 'config'
import {
  authHeader
} from '../_helpers'

export const userService = {
  login,
  logout,
  getAll
}