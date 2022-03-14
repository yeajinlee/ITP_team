import React, { useEffect, useState } from 'react';
import './css/MainImage.scss';
import { Card, Table, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
//import groupBoard from '../../page/communityGroup/GroupBoradData.json';
import axios from 'axios';

const Mainimage = () => {
  const [Groupdatas, setGroupdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [Comdatas, setComdata] = useState([]);
  const [techData, setTechData] = useState(null);

  useEffect(() => {
    const fetchGroupmain = async () => {
      try {
        setError(null);

        // loading 상태를 true
        setLoading(true);

        const response = await axios.get(`http://localhost:8085/group/recent`, null);
        setGroupdata(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchGroupmain();
  }, []);

  useEffect(() => {
    const fetchCommain = async () => {
      try {
        setError(null);

        // loading 상태를 true
        setLoading(true);

        const response = await axios.get(`http://localhost:8085/com/recent`, null);
        setComdata(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchCommain();
  }, []);

  useEffect(() => {
    const fetchTech = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8085/itTech/main");
        setTechData(response.data);
        console.log(response);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    }
    fetchTech();
  }, []);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!Groupdatas) return null;
  if (!Comdatas) return null;
  if (!techData) return null;
  return (
    <div id="imageMain">
      <div id="itTrend">
        <p>IT 기술 최신 동향</p>
        {/* IT 기술 */}
        <div id='itCard'>
          <Card className='itCardSize' onClick={() => window.open(`https://ko.reactjs.org${techData.reactArticles[0].titleLink}`, "_blank")} >
            <Card.Img src="./assets/reactLogo.png" id='cardImg'/>
            <Card.Body>
              <Card.Title className='title'>{techData.reactArticles[0].title}</Card.Title>
            </Card.Body>
          </Card>
          <Card className='itCardSize' onClick={() => window.open(`https://spring.io${techData.springArticles[0].titleLink}`, "_blank")}>
            <Card.Img variant="top" src="./assets/springLogo.png" id='cardImg'/>
            <Card.Body>
              <Card.Title className='title'>{techData.springArticles[0].title}</Card.Title>
            </Card.Body>
          </Card>
          <Card className='itCardSize' onClick={() => window.open(`https://news.vuejs.org/${techData.vueArticles[0].titleLink}`, "_blank")}>
            <Card.Img variant="top" src="./assets/vueLogo.png" id='cardImg'/>
            <Card.Body>
              <Card.Title className='title'>{techData.vueArticles[0].title}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* -----------------------------------------게시글 --------------------------------*/}
      <br />
      
      <p>모임찾기</p>
      <div id="groupLine">
        {Groupdatas.map((Groupdata) => (
          <Card className='groupCardSize'>
            <Link
              to={'/communityGroup/' + Groupdata.g_no}
              style={{ textDecoration: 'none' }}
            >
              <Card.Body key={Groupdata.g_no}>
                <Card.Img variant="top" src={Groupdata.g_img} id='cardImg'/>
                <Card.Title className="title">{Groupdata.g_title}</Card.Title>
                <Card.Text className="cardText">
                  {Groupdata.g_subtitle} 
                  <Card.Body className="bodyLink">
                    <Card.Link className="link" href="#">
                      {Groupdata.g_name}
                    </Card.Link>
                    <Card.Link className="link" href="#">
                      {Groupdata.g_tag}
                    </Card.Link>
                  </Card.Body>
                </Card.Text>
              </Card.Body>
            </Link>
          </Card>
        ))}
      </div>
      
      {/* ----------------------------------------- 소통공간 --------------------------------*/}
      <p className="communityHome">소통 공간</p>
      <div id="mainBoard">
        <Table className="boardTable">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {Comdatas.map((Comdata) => (
              <tr key={Comdata.c_no}>
                <td>{Comdata.c_no}</td>
                <td>
                  <Link
                    to={'/Communication/' + Comdata.c_no}
                    style={{ textDecoration: 'none' }}
                  >
                    {Comdata.c_title}
                  </Link>
                </td>
                <td>{Comdata.c_name}</td>
                <td>{Comdata.c_date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Mainimage;


