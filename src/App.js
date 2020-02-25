import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card, Spinner } from "react-bootstrap";

const baseUrl = new URL("https://api.giphy.com/v1");

function useImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const getOneMoreImage = () => fetchData();

  const url = new URL('v1/gifs/random', baseUrl);
  url.searchParams.append('api_key', process.env.REACT_APP_GIPHY_API_KEY)

  const fetchData = async () => {

    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        const { meta } = await response.json();
        throw new Error(`fetch failed ${response.status} ${response.statusText}`);
      }

      const { data } = await response.json();

      setImages(images.concat(data?.images?.downsized_large?.url))

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {

    fetchData();
  }, [])

  const clearAll = () => setImages([]);

  return { images, getOneMoreImage, loading, clearAll };
}

const text = {
  copyright: "© 2020 Idan Izicovich",
  title: "Get Images",
  getMoreImages: 'Get More Images',
  clear: "Clear All",
}

const App = () => {

  const { images, getOneMoreImage, loading, clearAll } = useImages();

  return <>
    <Card>
      <Card.Header>
        {text.title}
      </Card.Header>
      <Card.Body>
        {images.map(image =>
          <Card.Img
            style={{ margin: '1em 0' }}
            src={image} />)}

        <Container fluid>
          <Row>
              <Button variant="primary"
                onClick={getOneMoreImage}>
                {text.getMoreImages}
              </Button>
              <Button variant="danger"
                style={{marginLeft: '1em'}}
                onClick={clearAll}>
                {text.clear}
              </Button>
          </Row>
        </Container>

      </Card.Body>
      <Card.Footer>
        {text.copyright}
      </Card.Footer>
    </Card>
  </>
}

export default App;
