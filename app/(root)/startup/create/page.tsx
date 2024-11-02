import React from 'react'
import StartupForm from "@/components/createForm/StartupForm";
import {auth} from "@/auth";
import {redirect} from "next/navigation";

const CreatePage = async () => {
  const session = await auth();

  if(!session) redirect('/');

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit you startup </h1>
      </section>

      <StartupForm />
    </>
  )
}
export default CreatePage
