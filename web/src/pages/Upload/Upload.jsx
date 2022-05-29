import { useState, useRef } from 'react'
import axios from 'axios';
import { Buffer } from 'buffer/';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.min.css";
import "./Upload.css"
import Placeholder from "./../../assets/previewPlaceholder.svg"
import Ethereum from "./../../assets/ethereum_logo.svg"
import Polygon from "./../../assets/polygon_logo.svg"

const Upload = () => {
  const [name,setName] = useState('');
  const [address,setAddress] = useState('');
  const [description,setDescription] = useState('');
  const [chain,setChain] = useState('');
  const [image,setImage] = useState(null);
  const [displayImage,setDisplayImage] = useState(null);
  const [err,setErr] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const ipName = useRef(null);
  const ipAddress = useRef(null);
  const ipDescription = useRef(null);

  const submitToAPI = () => {
    if( (name === '') || (address === '') || (description === '') || (image === null) || (chain === '') )
    {
      setErr("Please fill all the fields");
      return;
    }
    const body = {
        name: name,
        image: image,
        description: description,
        validFrom: Date.now(),
        validTo: -1,
        recieversAddress: address,
        type: parseInt(chain)
    }
    setErr('');
    setIsLoading(true);
    console.log(body);
    // const agent = new axios.agent({

    // })
    axios.post('https://cors-everywhere.herokuapp.com/http://35.193.213.3:5050/v1/upload', body,
    {
        headers: {
            "Authorization": "Bearer 6250c21473e19a58eee972c8"
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity
    }).then(res => {
      if(res.data.success)
      {
        // alert(res.data.message)
        toast(res.data.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
          hideProgressBar: false,
          type: 'success'
        });
        setName('')
        setAddress('')
        setDescription('')
        setImage(null)
        setDisplayImage(null)
        setChain('')
        ipName.current.value = ''
        ipAddress.current.value = ''
        ipDescription.current.value = ''
      }
    })
    .catch(err => {
      console.log(err.message);
      toast("Sorry! Something went wrong", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: false,
        type: 'error'
      });
      setName('')
      setAddress('')
      setDescription('')
      setImage(null)
      setDisplayImage(null)
      setChain('')
      ipName.current.value = ''
      ipAddress.current.value = ''
      ipDescription.current.value = ''
    })
    .finally(() => setIsLoading(false))
  }
  return (
    <div className='upload'>
      <ToastContainer />
      {
        isLoading ?
        <h1 className="loading">MINTING...</h1>
        :
        <div className="uploadform">
          <div className="otherUpload">
            <input type="text" ref={ipName} id='name' name='name' placeholder='Name' onChange={(e) => setName(e.target.value)} />
            <input type="text" ref={ipAddress} id='address' name='address' placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
            <textarea ref={ipDescription} id='description' name='description' placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
            <select name="chain" id="chain" onChange={(e) => { setChain(e.target.value)} } >
              <option value="">
                Select your chain 
              </option>
              <option value="1">
                <span>
                  <img src={Ethereum} style={{ height: "2.4rem", width: "2.4rem" }} alt="ethlogo" />
                  Ethereum
                </span>
              </option>
              <option value="2">
                <span>
                  <img src={Polygon} alt="polylogo" />
                  Polygon
                </span>
              </option>
            </select>
          </div>
          <div className="imageUpload">
            <label htmlFor="certificate" className='upload-image'>
              <input type="file" 
                  id="certificate" 
                  name="certificate"
                  accept="image/png, image/jpeg"
                  onChange={(e) => {
                    if( e.target.files && e.target.files[0] )
                    {
                      var fr1 = new FileReader();
                      fr1.onload = () => { setDisplayImage(fr1.result) }
                      fr1.readAsDataURL(e.target.files[0]);
                      var fr2 = new FileReader();
                      fr2.onload = () => { 
                        // console.log(fr2.result)
                        // console.log(Buffer.from(fr2.result))
                        setImage(Buffer.from(fr2.result)) 
                      }
                      fr2.readAsArrayBuffer(e.target.files[0]);
                    }
                  }}
              />
              <div className="previewImage">
                <img src={ (displayImage === null) ? Placeholder : displayImage } alt="" />
              </div>
              <p>Upload Image</p>
            </label>
          </div>
        </div>
      }
      <div className="displayError">{err}</div>
      <div className="submitBtnContainer">
        <button className='submitBtn' onClick={() => submitToAPI() }>MINT</button>
      </div>
    </div>
  )
}

export default Upload