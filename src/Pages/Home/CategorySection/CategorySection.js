import { useQuery } from '@tanstack/react-query';
import Loading from '../../Loading/Loading';
import Category from '../Category/Category';

const CategorySection = () => {

    // tanstack query
    const {data : categories = [], refetch, isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: async() => {
            const res = await fetch('https://asssignment-12-server.vercel.app/categories');
            const data = await res.json();
            return data
        }
        
        
        
        // queryFn: () =>fetch('https://asssignment-12-server.vercel.app/categories') //url of server side
        // .then(res => res.json())
    });

    if(isLoading){
        return <Loading></Loading>
    }


    return (
        <div>
            <div>
            <h2 className='text-center my-5 text-4xl font-bold'>Our Product Category: {categories.length}</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category => <Category
                    key={category._id}
                    category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default CategorySection;