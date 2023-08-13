import {
  AspectRatio,
  Badge,
  Heading,
  Text,
  Box,
  Grid
} from '@radix-ui/themes';

function Thumbnail() {
  return (
    <Grid columns="5" gap="2" mb="5">
      <AspectRatio ratio={2 / 3}>
        <a href="">
          <Badge variant="solid" color="red" ml="2" mt="2" style={{ zIndex: 5, position: 'absolute' }}>
            LIVE
          </Badge>
          <img
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
            alt="A house in a forest"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: 'var(--radius-2)',
              position: 'relative'
            }}
          />
          <Box columns="2" gap="2" ml="2" style={{ color: 'white', zIndex: 5, marginTop: '-3.4rem', position: 'absolute' }}>
            <Heading size="2">Lenovo Thinkpad X1 Carbon</Heading>
            <Text size="1">Laptopin ID</Text>
          </Box>
        </a>
      </AspectRatio>
      <AspectRatio ratio={2 / 3}>
        <a href="">
          <Badge variant="solid" color="red" ml="2" mt="2" style={{ zIndex: 5, position: 'absolute' }}>
            LIVE
          </Badge>
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=820&q=80"
            alt="A house in a forest"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: 'var(--radius-2)',
              position: 'relative'
            }}
          />
          <Box columns="2" gap="2" width="auto" ml="2" style={{ color: 'white', zIndex: 5, marginTop: '-3.4rem', position: 'absolute' }}>
            <Heading size="2">Asus TUF Gaming</Heading>
            <Text size="1">Reergood</Text>
          </Box>
        </a>
      </AspectRatio>
      <AspectRatio ratio={2 / 3}>
        <a href="">
          <Badge variant="solid" color="red" ml="2" mt="2" style={{ zIndex: 5, position: 'absolute' }}>
            LIVE
          </Badge>
          <img
            src="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
            alt="A house in a forest"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: 'var(--radius-2)',
              position: 'relative'
            }}
          />
          <Box columns="2" gap="2" width="auto" ml="2" style={{ color: 'white', zIndex: 5, marginTop: '-3.4rem', position: 'absolute' }}>
            <Heading size="2">Asus Zenbook 5 Pro</Heading>
            <Text size="1">Laptop Indonesia</Text>
          </Box>
        </a>
      </AspectRatio>
      <AspectRatio ratio={2 / 3}>
        <a href="">
          <Badge variant="solid" color="red" ml="2" mt="2" style={{ zIndex: 5, position: 'absolute' }}>
            LIVE
          </Badge>
          <img
            src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
            alt="A house in a forest"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: 'var(--radius-2)',
              position: 'relative'
            }}
          />
          <Box columns="2" gap="2" width="auto" ml="2" style={{ color: 'white', zIndex: 5, marginTop: '-3.4rem', position: 'absolute' }}>
            <Heading size="2">Acer Zepirus 4</Heading>
            <Text size="1">Zero Laptop</Text>
          </Box>
        </a>
      </AspectRatio>
      <AspectRatio ratio={2 / 3}>
        <a href="">
          <Badge variant="solid" color="red" ml="2" mt="2" style={{ zIndex: 5, position: 'absolute' }}>
            LIVE
          </Badge>
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=726&q=80"
            alt="A house in a forest"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: 'var(--radius-2)',
              position: 'relative'
            }}
          />
          <Box columns="2" gap="2" width="auto" ml="2" style={{ color: 'white', zIndex: 5, marginTop: '-3.4rem', position: 'absolute' }}>
            <Heading size="2">Mackbook Pro M2</Heading>
            <Text size="1">Money Maker</Text>
          </Box>
        </a>
      </AspectRatio>
    </Grid>
  )
}

export default Thumbnail;