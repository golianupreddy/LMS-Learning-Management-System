import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";

import HomeLayout from '../layouts/HomeLayout';
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { isEmail, isValidPassword } from "../helpers/regexMatcher.js";

function Signup() {
    const navigate = useNavigate();
    const [signupDetails, setSignupDetails] = useState({
        email: '',
        fullName: '',
        password: '',
        avatar: '',
    });
    const [previewImage, setpreviewImage] = useState("");

    async function onFormSubmit(e) {
        e.preventDefault();
        
        if (!signupDetails.email || !signupDetails.fullName || !signupDetails.password) {
            toast.error("Please fill all the details");
            return;
        }
        if (signupDetails.fullName.length < 5) {
            toast.error("Name should be length of 5 or greater");
            return;
        }
        if (!isEmail(signupDetails.email)) {
            toast.error("Email is invalid");
            return;
        }

        toast.success("Account created successfully!");
        navigate("/signin");

        setSignupDetails({
            email: '',
            fullName: '',
            password: '',
            avatar: '',
        });
        setpreviewImage("");
    }

    function inputHandler(e) {
        const { name, value } = e.target;
        setSignupDetails({
            ...signupDetails,
            [name]: value
        });
    }

    function handleImage(e) {
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if (!uploadedImage) return;

        setSignupDetails({
            ...signupDetails,
            avatar: uploadedImage
        });

        const fileReader = new FileReader();
        fileReader.readAsDataURL(uploadedImage);
        fileReader.addEventListener("load", function () {
            setpreviewImage(this.result);
        });
    }

    return (
        <HomeLayout>
            <div className="flex overflow-x-auto items-center justify-center h-[100vh]">
                <form
                    onSubmit={onFormSubmit}
                    noValidate
                    className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]"
                >
                    <h1 className="text-2xl text-center font-bold">Registration Page</h1>
                    <label htmlFor="image_uploads" className="cursor-pointer">
                        {previewImage ? (
                            <img className="w-24 h-24 rounded-full m-auto object-cover" src={previewImage} />
                        ) : (
                            <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
                        )}
                    </label>
                    <input
                        onChange={handleImage}
                        type="file"
                        className="hidden"
                        name="image_uploads"
                        id="image_uploads"
                        accept=".jpg , .jpeg , .png , .svg"
                    />
                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className="font-semibold">Name</label>
                        <input
                            onChange={inputHandler}
                            value={signupDetails.fullName}
                            type="text"
                            name="fullName"
                            id="fullName"
                            className="bg-transparent px-2 py-1 border rounded-md"
                            placeholder="enter your Name..."
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input
                            onChange={inputHandler}
                            value={signupDetails.email}
                            type="email"
                            name="email"
                            id="email"
                            className="bg-transparent px-2 py-1 border rounded-md"
                            placeholder="enter your Email..."
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="font-semibold">Password</label>
                        <input
                            onChange={inputHandler}
                            value={signupDetails.password}
                            type="password"
                            name="password"
                            id="password"
                            className="bg-transparent px-2 py-1 border rounded-md"
                            placeholder="enter your Password..."
                        />
                    </div>
                    <button className="mt-2 bg-yellow-800 hover:bg-yellow-500 transition-all ease-in-out duration-300 cursor-pointer py-2 font-semibold text-lg rounded-md">
                        Create Account
                    </button>
                    <p className="text-center">
                        Already have an account ? <Link to='/signin' className="cursor-pointer text-accent">Login</Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    );
}

export default Signup;