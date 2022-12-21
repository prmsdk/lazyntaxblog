import Layout from "../components/Layout";

export default function Detail() {
    return(
        <Layout>
            <div className="w-full md:w-6/12 mx-auto flex items-center flex-col">
                <div className="flex items-center text-white/60 lg:space-x-3 flex-wrap">
                    <div className="uppercase lg:mr-0 mr-2">
                        category
                    </div>
                    <span className="lg:block hidden">&bull;</span>
                    <div className="">
                        date
                    </div>
                </div>
                <h1 className="text-2xl text-center mt-2">
                    title
                </h1>
                <div className="flex items-center mt-8">
                    <img src="/author-1.png" alt="Author Featured Post" className="w-14 h-14 rounded-full object-cover" />
                    <div className="ml-4">
                        <h3>Dika</h3>
                        <div className="text-white/60 text-sm">
                            Graphic Design
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-10/12 mx-auto my-12">
                <img src="/detail-image.png" alt={`Detail Image`} className="rounded w-full" />
            </div>
            <div className="w-full md:w-8/12 mx-auto my-6 leading-relaxed">
                <p className="text-xl mb-4">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea sequi dolorum debitis. Voluptatum, beatae atque. Molestias omnis minus eum porro numquam delectus quam, vero nisi totam ea. Blanditiis, repellat temporibus?
                </p>
                <p className="mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis optio numquam asperiores assumenda, consectetur sunt vitae corporis porro in odit. Facilis, debitis. Aliquid libero fuga pariatur exercitationem magnam nobis eos.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est debitis nemo, tempore corporis repudiandae animi distinctio earum sit error molestias nostrum! Nulla modi, voluptatibus deleniti repellendus error a magni facilis mollitia in.</p>
            </div>
        </Layout>
    )
}