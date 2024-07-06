import Image from "next/image";
import Box from '@mui/material/Box';
import { Container } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Container>
        <Box>
          <h1>Several Sausages Sat on Simpson</h1>
        </Box>
        <Box>
          <Image src="https://i.pinimg.com/originals/5b/f3/b3/5bf3b3ff8b27eefc4abcee898af6b9a0.gif" width={500}  height={500} alt="" title="kitten" />
        </Box>
      </Container> 
    </main>
  );
}
