import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import app, { db } from '../config/firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { addDoc, collection } from 'firebase/firestore';

function AddProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    images: '',
    primaryTag: [],
    secondaryTag: [],
    privilege: [],
    country: [],
    onlineMember: false,
    memberInput: [],
    note: '',
    url: '',
    leads: ''
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (e.target.files?.length) {
      setFormData({ ...formData, images: e.target.files[0].name });
    } else if (name === "primaryTag" || name === "secondaryTag" || name === "memberInput" || name === "privilege" || name === "country") {
      setFormData({ ...formData, [name]: [value] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const onSubmitHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { title, images, primaryTag, secondaryTag, privilege, country, onlineMember, memberInput, note, url, leads } =
      formData;
    if (
      !title ||
      !images ||
      !primaryTag ||
      !secondaryTag ||
      !privilege ||
      !country ||
      !onlineMember ||
      !memberInput ||
      !note ||
      !url ||
      !leads
    ) {
      alert('Please fill all fields!');
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'products'), formData);
      console.log('Document written with ID: ', docRef.id);
    } catch (e: any) {
      console.log(e);
      alert(e.message);
    }
  };

  return (
    <div className="container mx-auto flex justify-center item-center mt-5">
      <form className="w-3/4" onSubmit={onSubmitHandler} method="POST">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="title"
              id="title"
              className="block p-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={onChangeHandler}
            />
            <label
              htmlFor="title"
              className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
            >
              Title
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="file"
              accept="image/png, image/gif, image/jpeg"
              name="images"
              id="images"
              className="block p-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => onChangeHandler(e)}
            />
            <label
              htmlFor="images"
              className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
            >
              Images
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="primaryTag"
              id="primaryTag"
              className="block p-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => onChangeHandler(e)}
            />
            <label
              htmlFor="primaryTag"
              className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
            >
              Primary Tag
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="country"
              id="country"
              className="block p-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => onChangeHandler(e)}
            />
            <label
              htmlFor="country"
              className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
            >
              Country
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="secondaryTag"
              id="secondaryTag"
              className="block p-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => onChangeHandler(e)}
            />
            <label
              htmlFor="secondaryTag"
              className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
            >
              Secondary Tag
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="privilege"
              id="privilege"
              className="block p-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => onChangeHandler(e)}
            />
            <label
              htmlFor="privilege"
              className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
            >
              Privilege
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="memberInput"
              id="memberInput"
              className="block p-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => onChangeHandler(e)}
            />
            <label
              htmlFor="memberInput"
              className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
            >
              Member Input
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="onlineMember"
              id="onlineMember"
              className="block p-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => onChangeHandler(e)}
            />
            <label
              htmlFor="onlineMember"
              className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
            >
              Online Member
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="url"
              name="url"
              id="url"
              className="block p-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => onChangeHandler(e)}
            />
            <label
              htmlFor="url"
              className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
            >
              Url
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="leads"
              id="leads"
              className="block p-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => onChangeHandler(e)}
            />
            <label
              htmlFor="leads"
              className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
            >
              Leads
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="note"
              id="note"
              className="block p-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={(e) => onChangeHandler(e)}
            />
            <label
              htmlFor="note"
              className="peer-focus:font-medium absolute text-gray-500 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
            >
              Note
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-6 py-3 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
