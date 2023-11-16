import { Toaster } from "sonner";
import Aside from "./components/Aside";
import Main from "./components/Main";

export default function Home() {
  return (
    <>
      <Aside />
      <Main />
      <Toaster richColors />
    </>
  );
}
