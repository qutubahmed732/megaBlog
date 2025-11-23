import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query, Permission, Role } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwrite_URL)
      .setProject(conf.appwrite_ProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwrite_databaseId,
        conf.appwrite_collectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId
        },
        [
          Permission.read(Role.any()),
          Permission.update(Role.user(userId)),
          Permission.delete(Role.user(userId)),
          Permission.write(Role.user(userId))
        ]
      )
    } catch (error) {
      console.log(error, 'create post mai masla')
    }
  }

  async updatePost(slug, { title, content, featuredImage, status, userId }) {
    try {
      return await this.databases.updateDocument(
        conf.appwrite_databaseId,
        conf.appwrite_collectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId
        }
      )
    } catch (error) {
      console.log(error, 'update post mai masla')
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwrite_databaseId,
        conf.appwrite_collectionId,
        slug
      )
      return true;
    } catch (error) {
      console.log(error, 'delete post mai masla')
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwrite_databaseId,
        conf.appwrite_collectionId,
        slug
      )
    } catch (error) {
      console.log(error, 'get post mai masla hai')
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwrite_databaseId,
        conf.appwrite_collectionId,
        queries
      )
    } catch (error) {
      console.log(error, "get all posts mai masla hai");
    }
  }

  // upload file services

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwrite_bucketId,
        ID.unique(),
        file
      )
    } catch (error) {
      console.log(error, "upload file mai error hai")
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
        conf.appwrite_bucketId,
        fileId
      )
      return true;
    } catch (error) {
      console.log(error, "delete file mai error hai")
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFileView(
      conf.appwrite_bucketId,
      fileId
    )
  }

}

const services = new Service();



export default services;