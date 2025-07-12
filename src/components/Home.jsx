import React, { use, useContext, useEffect, useState } from "react";
import Child from "./Child";
import TripsList from "./TripsList";
import { useFieldArray, useForm } from "react-hook-form";
import Parent from "./Parent";
import { NameContext } from "./context/UserNamecontext";
import Cart from "./Cart";
import Test from "./Test";
function Home(props) {
  const [counter, setCounter] = useState(0);

  let user_name = "sara";
  user_name = "jsdligk";

  function displayAlert(message) {
    alert(`hello !${message}`);
  }

  const msgToChild = () => {
    displayAlert("from parent");
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
      });
  }, []);

  // useEffect(() => {
  //   setCounter((prev) => prev + 1);
  //   console.log("component is mounted");
  // }, []);
  // mount => unmount => re-mount  : in development mode

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    name: "",
    skills: [{ name: "", level: "" }],
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const onSubmit = (data) => {
    console.log("Employee data", data);
  };

  const names = ["name 1", "name 2", "name 3"];

  const { userName } = useContext(NameContext);

  // useReducer() more complicated data : products[] == useState() boolen, string, number ...

  return (
    <div>
      <Cart />
      <div>User name inside home component : {userName}</div>
      <Parent displayAlert={msgToChild} counter={counter} />
      <form
        id="form"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-6 mt-10"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Employee Registration
        </h2>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
            placeholder="Enter full name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <hr className="border-gray-200" />

        {/* Skills */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Skills</h3>
          {fields.map((item, index) => {
            console.log(fields);
            return (
              <div
                key={item.id}
                className="flex flex-col md:flex-row gap-2 items-start md:items-center mb-3"
              >
                <input
                  {...register(`skills.${index}.name`, {
                    required: "Skill name is required",
                  })}
                  placeholder="Skill name"
                  className="flex-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
                />
                <select
                  {...register(`skills.${index}.level`, {
                    required: "Skill level is required",
                  })}
                  defaultValue=""
                  className="p-2 border rounded-md"
                >
                  <option value="" disabled>
                    Select level
                  </option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                </select>
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-red-500 hover:text-red-600 text-sm"
                  title="Remove skill"
                >
                  ❌ Remove
                </button>
              </div>
            );
          })}

          <button
            type="button"
            onClick={() => append({ name: "", level: "" })}
            className="mt-2 text-blue-600 hover:underline flex items-center gap-1"
          >
            ➕ Add Skill
          </button>
        </div>

        <hr className="border-gray-200" />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
      Home
      <div className="p-5 rounded-2xl bg-gray-300">
        <TripsList />

        <span>{counter}</span>

        <button
          className="p-4 bg-red-100 text-black font-bold mx-3"
          onClick={(e) => {
            setCounter((counter) => counter + 1); // 1
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Home;

//useEffect
// mount => render in dom
// update => state is changed
// unmount  => removed from dom

// [] dependency list : array

// life cycle of the component => mount, update, unmount
// class components =>

// componentDidMount(){}
// componentDidUpdate(){}
// componentWillUnmount(){}

// useEffect(()=>{
// setCounter()
//},[]) ==> only in mount

// useEffect(()=>{
// setCounter()
//}) ==> executed with every state update == infinite loop

// useEffect(()=>{
// setCounter()
//}, [userId]) ==> executed with every state update == infinite loop

// useEffect(()=>{
// setCounter()
// return ()=>{
//  clearInterval()
// }
//}, [userId]) ==> executed with every state update == infinite loop
