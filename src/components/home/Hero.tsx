import { motion } from "framer-motion";
import Container from "../ layout/Container";

export default function Hero(){
  return (
    <div className="bg-sand">
      <Container className="py-24 md:py-36 text-center">
        <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-brand-ink">
          Together, we create meaningful change
        </motion.h1>
        <p className="mt-4 md:text-lg text-slate-700 max-w-3xl mx-auto">
          Advance your net-zero goals with community-based solutions that remove carbon,
          restore ecosystems, and support resilient livelihoods.
        </p>
      </Container>
    </div>
  );
}
