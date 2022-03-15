import React, {useEffect, useState} from 'react';
import './GroupWriting.scss';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BsChevronRight} from "react-icons/bs";


// eslint-disable-next-line
const GroupWriting = () => {
     


    const [g_title,setg_title] =useState('')
    
    const [g_subtitle,setg_subtitle] =useState('')
    const[g_content,setg_content]=useState('')
    const[g_tag,setg_tag]=useState('')
    const [g_img,setg_img]=useState('')
    const g_name=sessionStorage.getItem('m_name');


    const handleg_title=(e)=>{
      setg_title(e.target.value)
      console.log(g_title);
     
    }

    const handleg_subtitle=(e)=>{
      setg_subtitle(e.target.value)
      console.log(g_subtitle);
    }
    const handleg_content=(e)=>{
      setg_content(e.target.value)
      console.log(g_content);
    }

    const handleg_tag=(e)=>{
      setg_tag(e.target.value)
      if(e.target.value==='프로젝트'){
      setg_img('https://cdn.discordapp.com/attachments/946306018705563671/952793352326246440/6.png') }
      else if(e.target.value==='스터디'){
       setg_img('https://cdn.discordapp.com/attachments/946306018705563671/952798819454713876/5.png')
      }
      console.log(g_tag)
    }
                    
    



    const submit=()=>{
     console.log(g_title);
     console.log(g_subtitle);
     console.log(g_content);
      
      
      axios.post(`http://localhost:8085/addgroup`,null,{
        params:{
          'g_name':g_name,
          'g_title':g_title,
          'g_subtitle':g_subtitle,
          'g_content':g_content,
          'g_img':g_img,
          'g_tag':g_tag
         
        }
      })
      .then(res=>{
        console.log(res)
        console.log(res.data.g_title)
        console.log(res.data.g_content)
       
        document.location.href=`/communityGroup`;//성공시 목록으로 돌아가기
      })
      .catch()
    }
  
    return (
      
      <div id='groupWritingAll'>
         <p className='groupTitle'><BsChevronRight/> 모임찾기</p>
        <Form className='writingForm'>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" onChange={(e)=>handleg_title(e)} placeholder="글 제목을 입력해주세요" />
          </Form.Group>
          <Form.Group id='writingSub' controlId="exampleForm.ControlTextarea1">
            <Form.Control className='writingSubTitle' onChange={(e)=>handleg_subtitle(e)} type="text" placeholder='소제목 입력' />
            <Form.Select className='writingSelect' onChange={(e)=>handleg_tag(e)} aria-label="Default select example">
              <option>주제</option>
              <option value="스터디" >스터디</option>
              <option value="프로젝트">프로젝트</option>
            
            </Form.Select>
          </Form.Group>
            <Form.Control as='textarea' onChange={(e)=>handleg_content(e)} className='writingText' type="text" placeholder="내용을 입력해주세요" />
        </Form>
        <div id='button'>
          <Link to='/communityGroup'>
            <Button className='cancel me-2'>
              취소
            </Button>
          </Link>
          <Button 
          type="submit"
          className="submit-button"
          onClick={()=>submit()}
          >
            등록
          </Button>
        </div>
      </div>
  );
}

export default GroupWriting;