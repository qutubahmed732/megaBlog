import conf from "../conf/conf.js"
import { Client, Account, ID } from "appwrite";


export class AuthService {
  client = new Client();
  account;

  // connecting frontend to the backend
  constructor() {
    this.client
      .setEndpoint(conf.appwrite_URL)
      .setProject(conf.appwrite_ProjectId);
    this.account = new Account(this.client);
  }

  // sign-up user function
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name);

      if (userAccount) {
        // direct login sign-up hote hi
        this.login({ email, password })
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error, "sign up mai masla hua hai"
    }
  }

  // log-in user function
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(
        email,
        password
      );
    } catch (error) {
      throw error, "login mai masla hai"
    }
  }

  // chechking if user is login or not
  async getCurrentUser() {
    try {
      return await this.account.get()
    } catch (error) {
      // console.log(error, "user login check karne mai masla hai")
    }
    return null;
  }

  // logging out the user
  async logout() {
    try {
      await this.account.deleteSessions()
    } catch (error) {
      console.log("logou mai issue hai", error)
    }
  }
}

const authService = new AuthService();

export default authService;