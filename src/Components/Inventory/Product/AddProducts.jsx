import React, { useState } from 'react'
import MainLayout from '../../../Layouts/MainLayout'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import { TiTick } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { ImArrowRight2 } from 'react-icons/im';
import Banner2 from '../../Banner/Banner2';
import AddProductStep1 from './AddProductStep1';
import AddProductStep3 from './AddProductStep3';
import AddProductStep2 from './AddProductStep2';
import AddProductStep4 from './AddProductStep4';
import { useSelector } from 'react-redux';
import { useCreateProductMutation } from '../../../Redux/API/inventoryApi';
import Cookies from 'js-cookie';

const AddProducts = () => {
  const steps = ["Information", "Price", "Photo"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const nav = useNavigate();
  const token = Cookies.get("token")
  const [createProduct] = useCreateProductMutation()
  const form1 = useSelector(state => state.productSlice.pdForm1)
  const form2 = useSelector(state => state.productSlice.pdForm2)
  const form3 = useSelector(state => state.productSlice.pdForm3)

  const createProductHandler = async(e)=>{
    try{
      e.preventDefault();
      const pdData = {name: form1?.name, brand_id: form1?.brand_id, actual_price: form2?.realPrice, sale_price: form2?.price, unit: form1?.unit, more_information: form1?.more_information, photo: "" }
      const data = await createProduct({token,pdData})
      // console.log(data)
      if(data?.data){
        showAlert()
      }
    }catch(error){
      console.log(error)
    }
  }
  const showAlert = () => {
    Swal.fire({
      customClass : {
        title: 'swal2-title'
      },
      title: "Successfully created an product",
      icon: "success",
      confirmButtonText: "OK",
      width: 400,
      background: "#161618",
    }).then((result) => {
      if (result.isConfirmed) {
        nav("/inventory/products")
      }
    })
  };
  return (
    <MainLayout>
      <div className="bg-[#202124] w-full flex justify-center">
        <div className="w-[95%] my-6 flex flex-col gap-8">
          {/* header  */}
          <Banner2
            title={"Add Product"}
            path1={"Inventory"}
            path2={"Add Product"}
            btn2={"Product List"}
            button2={true}
            route={"/inventory/products"}
          />
          {/* form  */}
          <div className="flex gap-10">
            <div className="w-[65%]">
              {/* {currentStep == 1 && <AddProductStep1 currentStep={currentStep} />}
              {currentStep == 2 && <AddProductStep2 />}
              {currentStep == 3 && <AddProductStep3 />}
              {currentStep == 4 && <AddProductStep4 />} */}
              <div className={`${currentStep == 1 ? "block" : " hidden"}`}>
              <AddProductStep1 currentStep={currentStep}/>
              </div>

              <div className={`${currentStep == 2 ? "block" : " hidden"}`}>
              <AddProductStep2 currentStep={currentStep}/>
              </div>

              <div className={`${currentStep == 3 ? "block" : " hidden"}`}>
              <AddProductStep3 currentStep={currentStep}/>
              </div>

              <div className={`${currentStep == 4 ? "block" : " hidden"}`}>
              <AddProductStep4 currentStep={currentStep}/>
              </div>
           
            </div>
            <div className="flex flex-col mt-16">
              {steps.map((step, i) => {
                return (
                  <div key={i} className="flex flex-col">
                    <div
                      className={`step-item ${
                        currentStep == i + 1 && "active"
                      } ${(i + 1 < currentStep || complete) && "complete"}`}
                    >
                      <div className="step">
                        {i + 1 < currentStep || complete ? (
                          <TiTick className=" text-black" size={22} />
                        ) : (
                          i + 1
                        )}
                      </div>
                      <p className="text-[#FFFFFF] font-medium tracking-wider">
                        {step}
                      </p>
                    </div>
                    {i < 2 && <div className="line"></div>}
                  </div>
                );
              })}
              <div className="mt-8">
                <Link onClick={currentStep == 4 && createProductHandler }>
                  <button type='submit'
                    onClick={() => {
                      {
                        currentStep > 3
                          ? setComplete(true)
                          : setCurrentStep((pre) => pre + 1);
                      }
                    }}
                    className="btn flex items-center gap-2"
                  >
                    {currentStep > 3 ? "Create" : "Next"}
                    {currentStep <= 3 && (
                      <span>
                        <ImArrowRight2 />
                      </span>
                    )}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default AddProducts
