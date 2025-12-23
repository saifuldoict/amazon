import Footer from "@/components/ui/shared/footer";
import Header from "@/components/ui/shared/header";



export default async function HomeLayout({children}){

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )

} 
  

