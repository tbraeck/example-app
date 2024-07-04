import Image from "next/image";
import Box from '@mui/material/Box';


export default function Home() {
  return (
    <main>
      <Box>
        <h1>Several Sausages Sat on Simpson</h1>
      </Box>
      <Box>
        <Image src="https://i.pinimg.com/originals/5b/f3/b3/5bf3b3ff8b27eefc4abcee898af6b9a0.gif" width={100}  height={100} alt="" title="kitten" />
      </Box>
    </main>
  );
}
