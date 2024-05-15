import toast from "react-hot-toast"
import { AuthContext } from "../Providers/AuthProvider"
import { useContext } from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import axios from "axios"

function Purchase() {
    const {user}=useContext(AuthContext)
    const food = useLoaderData()
    const navigate = useNavigate()
  
    const {_id, category, cooker_name,  cooker_email,count,  food_name, image,  price,  quantity}=food || {}

    const handlePurchase = async e=>{
          e.preventDefault()
          if (user?.email === cooker_email)
            return toast.error('Action not permitted!')
          const form = e.target
          const foodId = _id
          const purchase_time = new Date()
          const email = user?.email
          const order_quantity = parseInt(form.order_quantity.value)
          if(order_quantity>quantity) return toast.error('Order at least equal or less than available quantity')


          const orderData = {
            foodId,
            price,
            purchase_time,
            food_name,
            cooker_name,
            cooker_email,
            order_quantity,
            email,
            image,
            category,
            count,
            quantity
          }

          try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/order`, orderData)
            toast.success('Order Placed Successfully!')
            navigate('/allFoods')
            
          } catch (err) {
            toast.error(err.response.data)
            e.target.reset()
          }

        
         }
  return (
    <div className="min-h-[calc(100vh-300px)]  w-full">
         <div className="relative mx-auto mt-16  mb-8 space-y-8 bg-white p-8 shadow-[0px_0px_30px_2px_rgba(100,100,111,0.1)] dark:bg-[#18181B] md:w-[400px]">
        {/* top part  */}
        <div>

           <img  width={60} height={60} className="h-[60px] w-[60px] rounded-full border bg-slate-100 object-cover p-2 duration-300 hover:scale-105" src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL2pvYjk2OC1lbGVtZW50LTAxMi14LmpwZw.jpg" alt="card navigate ui"/>

            {/* Price Ribbon SVG  */}
            <div className="absolute -right-[20px] -top-4 ">
                <div className="relative h-full w-full">
                    {/* svg  */}
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width="120" height="120" x="0" y="0" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve"><defs><linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style={{ stopColor: '#0095FF', stopOpacity: 1 }} /><stop offset="100%" style={{ stopColor: '#87CEFA', stopOpacity: 1 }} /></linearGradient></defs><g><path d="M384 0H149.333c-41.237 0-74.667 33.429-74.667 74.667v426.667a10.668 10.668 0 0 0 6.592 9.856c1.291.538 2.676.813 4.075.811a10.663 10.663 0 0 0 7.552-3.115l120.448-120.619C260.48 434.795 325.44 499.2 332.416 507.136c3.261 4.906 9.882 6.24 14.788 2.979a10.67 10.67 0 0 0 3.964-4.835 6.53 6.53 0 0 0 .832-3.947v-448c0-17.673 14.327-32 32-32 5.891 0 10.667-4.776 10.667-10.667S389.891 0 384 0z" style={{ fill: 'url(#skyGradient)' }}/><path d="M394.667 0c23.564 0 42.667 19.103 42.667 42.667v32c0 5.891-4.776 10.667-10.667 10.667H352V42.667C352 19.103 371.103 0 394.667 0z" style={{ fill: '#1976d2' }}/></g></svg>
                    {/* Price  */}
                    <div className="absolute left-7 top-8 flex flex-col text-xl font-semibold text-white"><span><sub className="text-sm font-normal">$</sub><span>{price}</span></span><span className="text-xs font-normal pl-2">/pcs</span></div>
                </div>
            </div>
        </div>
        <div className="space-y-4">
            <p className="capitalize text-gray-600 font-pacific text-2xl dark:text-sky-100">{food_name}</p>
            <h3 className="text-xl  text-gray-600 font-poet dark:text-[#139DFE]">Order Date: {new Date(Date.now()).toLocaleString()} </h3>
            <ul className="space-y-3">
                <li className="flex gap-3"><svg className="fill-[#0386FF] dark:fill-[#289DFF]" width={20} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="navigateui" strokeLinecap="round" strokeLinejoin="round"></g><g id="navigateui"><g id="tick"><g id="tick_2"><path id="navigateui" fillRule="evenodd" clipRule="evenodd" d="M43.8679 21.6919C44.6935 28.8058 41.6741 35.704 36.0728 39.952C35.6328 40.2857 35.0055 40.1995 34.6718 39.7595C34.338 39.3194 34.4242 38.6921 34.8643 38.3584C39.9074 34.5338 42.6244 28.3263 41.8812 21.9225C41.671 20.1113 41.1986 18.3944 40.5065 16.8051L26.1673 31.1443C25.5822 31.7294 24.7948 32.0363 23.9994 32.0271C23.1815 32.0363 22.3941 31.7294 21.809 31.1443L14.359 23.6943C13.9685 23.3038 13.9685 22.6706 14.359 22.2801C14.7496 21.8896 15.3827 21.8896 15.7733 22.2801L23.2233 29.7301C23.4197 29.9265 23.6865 30.0305 23.9994 30.0273C24.2898 30.0305 24.5566 29.9265 24.753 29.7301L39.5542 14.9289C36.0589 8.94407 29.2496 5.2706 21.924 6.12251C12.0492 7.27066 4.97548 16.2058 6.12186 26.0817C7.06163 34.1648 13.2925 40.5543 21.232 41.7937C21.4211 41.8262 21.7587 41.8766 22.187 41.9273C22.5257 41.9674 22.8658 42.0003 23.1985 42.0236C23.7495 42.0623 24.1647 42.5402 24.1261 43.0912C24.0875 43.6421 23.6095 44.0574 23.0586 44.0187C22.6921 43.993 22.3207 43.9571 21.9519 43.9134C21.4857 43.8582 21.1145 43.8028 20.9083 43.7672C12.1017 42.3926 5.17946 35.2942 4.13522 26.3125C2.86149 15.3394 10.7211 5.4116 21.693 4.13589C29.6475 3.21084 37.0542 7.08801 41.0117 13.4715L42.279 12.2041C42.6696 11.8136 43.3027 11.8136 43.6933 12.2041C44.0838 12.5946 44.0838 13.2278 43.6933 13.6183L42.0149 15.2967C42.9621 17.2572 43.6027 19.4071 43.8679 21.6919Z"></path></g></g></g></svg>Food Owner Name: {cooker_name}</li>
                <li className="flex gap-3"><svg className="fill-[#0386FF] dark:fill-[#289DFF]" width={20} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="navigateui" strokeLinecap="round" strokeLinejoin="round"></g><g id="navigateui"><g id="tick"><g id="tick_2"><path id="navigateui" fillRule="evenodd" clipRule="evenodd" d="M43.8679 21.6919C44.6935 28.8058 41.6741 35.704 36.0728 39.952C35.6328 40.2857 35.0055 40.1995 34.6718 39.7595C34.338 39.3194 34.4242 38.6921 34.8643 38.3584C39.9074 34.5338 42.6244 28.3263 41.8812 21.9225C41.671 20.1113 41.1986 18.3944 40.5065 16.8051L26.1673 31.1443C25.5822 31.7294 24.7948 32.0363 23.9994 32.0271C23.1815 32.0363 22.3941 31.7294 21.809 31.1443L14.359 23.6943C13.9685 23.3038 13.9685 22.6706 14.359 22.2801C14.7496 21.8896 15.3827 21.8896 15.7733 22.2801L23.2233 29.7301C23.4197 29.9265 23.6865 30.0305 23.9994 30.0273C24.2898 30.0305 24.5566 29.9265 24.753 29.7301L39.5542 14.9289C36.0589 8.94407 29.2496 5.2706 21.924 6.12251C12.0492 7.27066 4.97548 16.2058 6.12186 26.0817C7.06163 34.1648 13.2925 40.5543 21.232 41.7937C21.4211 41.8262 21.7587 41.8766 22.187 41.9273C22.5257 41.9674 22.8658 42.0003 23.1985 42.0236C23.7495 42.0623 24.1647 42.5402 24.1261 43.0912C24.0875 43.6421 23.6095 44.0574 23.0586 44.0187C22.6921 43.993 22.3207 43.9571 21.9519 43.9134C21.4857 43.8582 21.1145 43.8028 20.9083 43.7672C12.1017 42.3926 5.17946 35.2942 4.13522 26.3125C2.86149 15.3394 10.7211 5.4116 21.693 4.13589C29.6475 3.21084 37.0542 7.08801 41.0117 13.4715L42.279 12.2041C42.6696 11.8136 43.3027 11.8136 43.6933 12.2041C44.0838 12.5946 44.0838 13.2278 43.6933 13.6183L42.0149 15.2967C42.9621 17.2572 43.6027 19.4071 43.8679 21.6919Z"></path></g></g></g></svg>Food Owner Email: {cooker_email}</li>
            </ul>
         <form onSubmit={handlePurchase}>
         <div className="flex gap-3">
           <h2 className="lg:text-lg sm:text-base text-sm text-gray-600 font-poet">Purchase Quantity</h2>
            <input type="number" name="order_quantity"  defaultValue={1}  className="border border-sky-500 rounded-md px-5 w-1/4 mx-4 h-10 " />
           </div>
            <div className="flex justify-center pt-4">
                <button type="submit" className="h-16 w-full rounded-full border-2 border-sky-300 font-black text-sky-800 duration-300 dark:text-[#6CC2FB]">Purchases</button>
            </div>
         </form>
        </div>
      </div>
    </div>
  )
}

export default Purchase