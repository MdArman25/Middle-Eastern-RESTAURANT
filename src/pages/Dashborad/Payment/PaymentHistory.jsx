import { useQuery } from "@tanstack/react-query";
import Context from "../../../Hooks/useContext";
import useAxios from "../../../Hooks/useAxios";


const PaymentHistory = () => {
    const { user } = Context();
    const axiosSecure = useAxios();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment/${user.email}`)
            console.log(res.data);
            return res.data;
        }
    })


    return (
        <div>
            <h2 className="text3-xl">Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <th>price</th>
                            <th>email</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => <tr key={payment._id}>
                    
                            <th>{index + 1}</th>
                            <td>${payment.price}</td>
                            <td>{payment.email}</td>
                            <td>{payment.transactionId}</td>
                            <td>{payment.date.slice(0,10)}</td>
                            <td>{payment.status}</td>
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;