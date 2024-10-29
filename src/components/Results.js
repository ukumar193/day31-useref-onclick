import React, { useRef } from 'react'

function Results() {
    let telInputRef = useRef();
    let engInputRef = useRef();
    let hinInputRef = useRef();
    let matInputRef = useRef();
    let sciInputRef = useRef();
    let socInputRef = useRef();
    let nameInputRef = useRef();

    let resultSpan = useRef();
    let rollNumberRef = useRef();

  return (
    <div className="vid" >
 <form>
 
    <fieldset>
      <legend>Student Details</legend>
    <div>
     <label>Name</label>
      <input ref={nameInputRef}></input>
    </div>
    <div>
     <label>Roll number</label>
      <input ref={rollNumberRef}></input>
    </div>
    </fieldset>
   <fieldset>
    <div>
     <label>Telugu</label>
      <input type="number" ref={telInputRef}></input>
    </div>
    <div>
     <label>English</label>
      <input type="number" ref={engInputRef}></input>
    </div>
    <div>
     <label>Hindi</label>
      <input type="number" ref={hinInputRef}></input>
    </div>
    <div>
     <label>Maths</label>
      <input type="number" ref={matInputRef}></input>
    </div>
    <div>
     <label>Science</label>
      <input type="number" ref={sciInputRef}></input>
    </div>
    <div>
     <label>Social</label>
      <input type="number" ref={socInputRef}></input>
      </div>
      
      </fieldset>
      <div>
      <button type="reset"onClick={()=>{
        let name=nameInputRef.current.value;
        let telMarks= Number(telInputRef.current.value);
        let rollNumber=Number(rollNumberRef.current.value);
        let engMarks= Number(engInputRef.current.value);
        let hinMarks= Number(hinInputRef.current.value);
        let matMarks= Number(matInputRef.current.value);
        let socMarks= Number(socInputRef.current.value);
        let sciMarks= Number(sciInputRef.current.value);
        let totalMarks = telMarks+engMarks+hinMarks+matMarks+sciMarks+socMarks;
        alert(`  Roll Number : ${rollNumber} Name :${name} Total Marks : ${totalMarks}`) ;
        console.log(totalMarks)
        // telInputRef.current.value=1;
        // telInputRef.current.style.background="green"
        // engInputRef.current.value=10;
        // engInputRef.current.style.background="green"
        
        resultSpan.current.innerHTML=`Roll Number: ${rollNumber} Name: ${name} Total: ${totalMarks}` ;
                    
      }}>submit</button>
</div>
      <div>
      
      <span ref={resultSpan}> Enter the details and click the button</span>
      </div>

    
   
 </form>
    </div>

  )
}

export default Results