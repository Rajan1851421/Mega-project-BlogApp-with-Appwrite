import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    accoount;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.accoount = new Account(this.client)

    }

    // register section 


    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.accoount.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({ email, password })
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("createAccount", error);
        }
    }
//  login section


    async login({ email, password }) {
        try {
            return await this.accoount.createEmailSession(email, password)
        } catch (error) {
            console.log("login", error);
        }
       
    }


    // logout section 

    async getCurrentUser(){
        try {
          return await this.accoount.get();            
        } catch (error) {
          console.log("getCurrentUser", error);  
        }
        return null;
    }


    async logout (){
        try {
            return await this.accoount.deleteSessions();
            
        } catch (error) {
            console.log("Logout",error);
            
        }
    }

}

const authService = new AuthService();


export default AuthService;