import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/pic999.jpeg" />

        <Title title="Saraut Rakklom (Earth)">
          <h3>ตำแหน่ง : Gametester</h3>
        </Title>

        <Title title="Contact">
     
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/07/07").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66925262632
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : s64122202077@ssru.ac.th.com</p>
          
        </Title>
    
        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p style={{marginTop:"-8px"}}>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>ชื่อเล่น เอิร์ท ปัจจุบันอายุ 22 ปี ศึกษาที่มหาวิทยาลัยราชฎัสสวนสุนันทา คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยีสารสนเทศ</p>
        </Title>

        <Title title="Work Experience">
          <p>มีประสบการ์ในการทำงานดลุ่มที่ดีและมีความสามารในการบันทึกหน้าจอรวมไปถึงความสามารในการตัดต่อวิดีโอและหารตัดต่อรูปภาพ</p>
        </Title>

        <Title title="Skills">
          <p>Photoshop</p>
          <p>Sony vagas</p>
          <p>Adobe Premiere pro</p>
          <p>โปรแกรมบันทึกหน้าจอ</p>
          <p>มีพื้นฐานการใช้โปรแกรมอื่นๆ</p>
        </Title>
      </div>
    </main>
  )
}

export default App
