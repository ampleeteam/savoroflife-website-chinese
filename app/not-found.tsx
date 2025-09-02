import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="flex flex-col justify-center">
          <div>
            <h2 className="text-[50px] font-bold text-center">404</h2>
            <p className="text-center">SORRY, PAGE NOT FOUND</p>
          </div>
          <Link href="/meals" replace>
            <Button className="text-center mt-5 w-full">Go to Menu</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
