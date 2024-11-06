import { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//axios get method 
//axios set method
const url ='http://localhost:3000/categories';


const LoadData = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();
    
    const fetchData = async() => {
        try {
            const { data } = await axios.get(url, {
                headers: {
                    Accept: 'application/json',
                },
            });
            setCategories(data);
        } catch (error) {
            console.log(error.response);
        }

    };
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };
    const handleNextEventClick =() => {
        navigate ('/nextevent');
    }



       // console.log('fetch data'); // (in every click in console fetch data's count value is increasing)
        
        {/*for Get Method 
        try {
            const response = await axios(url);
            const data = response.data;
            console.log(data);
        } catch(error){
            console.log(error.response);
        }
            */}
    
{/*  for Get Method fetch Data
    useEffect(() => {
        fetchData();
    }, []);
    */}
    return (
        <div className="bg-white min-h-screen p-8">
            <h1 className="text-2xl font-bold">Catagory Loading Page</h1>
           
            <button className="mt-4 px-4 py-2 bg-red-300 text-black rounded-lg hover:bg-slate-700" onClick={fetchData}>
                Click here 
            </button>    
            

            {/* Display categories if they are available */}
            {categories.length > 0 ? (
                <div className="mt-4">
                    <b>Select Category: </b>

                    <select
                        id="category"
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded  focus:shadow-outline"
                        value={selectedCategory}
                        onChange={handleCategoryChange} // Handle selection
                    >
                        <option value="" disabled>
                            -- Select a Category --
                        </option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>


                </div>
            ) : (
                <p className="mt-4">No categories loaded yet.</p>
             
            )} 
            <br></br>
            <button className="mt px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-slate-800">Submit</button> <br></br>
            <button className="mt-4 px-4 py-2 bg-lime-400 text-black rounded-lg hover:bg-slate-400" onClick={handleNextEventClick}>Next Event</button>
        </div>
    );
};

export default LoadData;


