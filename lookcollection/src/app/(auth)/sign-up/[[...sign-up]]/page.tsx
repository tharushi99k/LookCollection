import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen flex justify-center items-center w-full">
      <SignUp />
    </div>
  );
}

// http://localhost:3000/sign-up?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F