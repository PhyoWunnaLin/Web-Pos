import React, { useState } from 'react'
import MainLayout from '../../../Layouts/MainLayout'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { useEditProductMutation, useGetProductDetailQuery } from '../../../Redux/API/inventoryApi';
import Banner2 from '../../Banner/Banner2';
import EditProductStep1 from './EditProductStep1';
import EditProductStep2 from './EditProductStep2';
import EditProductStep3 from './EditProductStep3';
import EditProductStep4 from './EditProductStep4';
import { TiTick } from 'react-icons/ti';
import { ImArrowRight2 } from 'react-icons/im';
import Loader from '../../Loader/Loader';
import Swal from 'sweetalert2';

const EditProduct = () => {
    const {id} = useParams();
    const steps = ["Information", "Price", "Photo"];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);
    const nav = useNavigate();
    const token = Cookies.get("token")
    const {data , isLoading} = useGetProductDetailQuery({token,id});
    // console.log(data?.data);
    const detail = data?.data
    const [editProduct] = useEditProductMutation();
    const form1 = useSelector(state => state.productSlice.editPdForm1)
    const form2 = useSelector(state => state.productSlice.editPdForm2)
    const form3 = useSelector(state => state.productSlice.editPdForm3)

    const editProductHandler = async(e)=>{
        try{
          e.preventDefault();
          const newData = {name: form1?.name, brand_id: form1?.brand_id, actual_price: form2?.realPrice, sale_price: form2?.price, unit: form1?.unit, more_information: form1?.more_information, photo: form3 }
          const data = await editProduct({token,id,newData})
          console.log(data)
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
          title: "Successfully updated a product",
          icon: "success",
          confirmButtonText: "SEE ALL PRODUCTS",
          showCloseButton: true,
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
            title={"Edit Product"}
            path1={"Inventory"}
            path2={"Product"}
            path3={"Edit Product"}
            btn2={"Product List"}
            button2={true}
            route={"/inventory/products"}
          />
          {/* form  */}
          {isLoading ? <div><Loader/></div> : <div className="flex gap-10">
            <div className="w-[65%]">
              <div className={`${currentStep == 1 ? "block" : " hidden"}`}>
              <EditProductStep1 currentStep={currentStep} detail={detail}/>
              </div>

              <div className={`${currentStep == 2 ? "block" : " hidden"}`}>
              <EditProductStep2 currentStep={currentStep} detail={detail}/>
              </div>

              <div className={`${currentStep == 3 ? "block" : " hidden"}`}>
              <EditProductStep3 currentStep={currentStep} detail={detail}/>
              </div>

              <div className={`${currentStep == 4 ? "block" : " hidden"}`}>
              <EditProductStep4 currentStep={currentStep} detail={detail}/>
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
                <Link onClick={currentStep == 4 && editProductHandler }>
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
          </div>}
        </div>
      </div>
    </MainLayout>
  )
}

export default EditProduct
