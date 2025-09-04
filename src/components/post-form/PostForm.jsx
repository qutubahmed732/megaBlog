import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from "../index.js"
import services from '../../appwrite/config.js'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({ post }) {

  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || '',
      slug: post?.title || '',
      content: post?.content || '',
      status: post?.status || 'active'
    }
  })

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData)

  // form ka data collect karke appwrite(backend) ko derahe hai

  const submit = async (data) => {
    console.log("form chala")
    if (post) {

      // ye code image save kar raha hai hamare storage mai jaha images save hoti hai
      const file = data.image[0] ? await services.uploadFile(data.image[0]) : null;

      // ye code purani image post ki delete kar rah hai
      if (file) services.deleteFile(post.featuredImage)


      const dbPost = await services.updatePost(post.$id, {
        ...data,
        userId: userData.$id,
        featuredImage: file ? file.$id : undefined,
      })
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`)
      }

    } else {
      // ye code image save kar raha hai hamare storage mai jaha images save hoti hai
      const file = await services.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id
        data.featuredImage = fileId
        const dbPost = await services.createPost({
          ...data,
          userId: userData.$id
        })

        if (dbPost) navigate(`/post/${dbPost.$id}`)
      }
    }
  }

  // creating slug here

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/\s/g, '-')
    }

    return "";
  }, [])

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {

      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true })
      }
    })

    return () => {
      subscription.unsubscribe();
    }
  }, [watch, slugTransform, setValue])

  return (

    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
          }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={services.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full cursor-pointer">
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>


  )
}

export default PostForm