import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import HeroCard from "./card";
import { useState } from "react";
import DefaultCard from "./cardDefault";
import { IoClose } from "react-icons/io5";
import ModalHeroes from "./modalHeroes";
import bgHero from "../public/bg_hero.png";

type ModalBatleProps = {
  show: boolean;
  setShow: (show: boolean) => void;
  hero: Heroes;
  allHeroes: Array<Heroes>;
};

type Result = {
  hero1: number;
  hero2: number;
};

const ModalBatle = ({ show, setShow, allHeroes }: ModalBatleProps) => {
  const [selectedHeroes, setSelectedHeroes] = useState<Array<Heroes>>([
    { ...HeroDefault },
    { ...HeroDefault },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstHero, setIsFirstHero] = useState(true);
  const [result, setResult] = useState<Result>({
    hero1: -1,
    hero2: -1,
  });

  const handleSelect = (index: number) => () => {
    setIsOpen(true);
    setIsFirstHero(index === 1);
  };

  const handleSelectHero = (hero: Heroes) => {
    if (isFirstHero) {
      setSelectedHeroes([hero, selectedHeroes[1]]);
    } else {
      setSelectedHeroes([selectedHeroes[0], hero]);
    }

    setResult({ hero1: -1, hero2: -1 });
  };

  const handleBatle = () => {
    if (selectedHeroes[0].id === -1 || selectedHeroes[1].id === -1) {
      alert("Selecione dois heróis para batalhar");
      return;
    }
    const hero1 = selectedHeroes[0];
    const hero2 = selectedHeroes[1];
    const hero1Power =
      hero1.powerstats.intelligence +
      hero1.powerstats.strength +
      hero1.powerstats.speed +
      hero1.powerstats.durability +
      hero1.powerstats.power +
      hero1.powerstats.combat;
    const hero2Power =
      hero2.powerstats.intelligence +
      hero2.powerstats.strength +
      hero2.powerstats.speed +
      hero2.powerstats.durability +
      hero2.powerstats.power +
      hero2.powerstats.combat;
    if (hero1Power > hero2Power) {
      setResult({ hero1: 1, hero2: 0 });
    } else if (hero1Power < hero2Power) {
      setResult({ hero1: 0, hero2: 1 });
    } else {
      setResult({ hero1: 2, hero2: 2 });
    }
  };

  return (
    <Modal
      isOpen={show}
      onOpenChange={setShow}
      className="z-50 bg-slate-800"
      size="5xl"
      backdrop="blur"
    >
      <ModalContent className="bghero">
        <ModalHeader className="  text-zinc-100 text-6xl justify-center">
          Batalha de Herois
        </ModalHeader>
        <ModalBody>
          {isOpen && (
            <ModalHeroes
              show={isOpen}
              setShow={() => setIsOpen(false)}
              onSelectHero={handleSelectHero}
              allHeroes={allHeroes}
            />
          )}
          <div className="flex justify-center gap-8 items-center">
            <div className="cursor-pointer" onClick={handleSelect(1)}>
              {selectedHeroes[0].id !== -1 ? (
                <HeroCard
                  key={selectedHeroes[0].id}
                  name={selectedHeroes[0].name}
                  bgImage={selectedHeroes[0].images.sm}
                  attributes={[
                    {
                      name: "Inteligência",
                      value: selectedHeroes[0].powerstats.intelligence,
                    },
                    {
                      name: "Força",
                      value: selectedHeroes[0].powerstats.strength,
                    },
                    {
                      name: "Velocidade",
                      value: selectedHeroes[0].powerstats.speed,
                    },
                    {
                      name: "Durabilidade",
                      value: selectedHeroes[0].powerstats.durability,
                    },
                    {
                      name: "Poder",
                      value: selectedHeroes[0].powerstats.power,
                    },
                    {
                      name: "Combate",
                      value: selectedHeroes[0].powerstats.combat,
                    },
                  ]}
                />
              ) : (
                <DefaultCard />
              )}
              <div className="text-center text-4xl mt-3 border-black  text-white">
                {result.hero1 === 1 ? (
                  <p className="bg-green-500 rounded-lg">Vencedor</p>
                ) : result.hero1 === 0 ? (
                  <p className="bg-red-600 rounded-lg">Perdedor</p>
                ) : result.hero1 === 2 ? (
                  <p className="bg-yellow-500 rounded-lg">Empate</p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <IoClose size={80} color="black" />
            <div className="cursor-pointer" onClick={handleSelect(2)}>
              {selectedHeroes[1].id !== -1 ? (
                <HeroCard
                  key={selectedHeroes[1].id}
                  name={selectedHeroes[1].name}
                  bgImage={selectedHeroes[1].images.sm}
                  attributes={[
                    {
                      name: "Inteligência",
                      value: selectedHeroes[1].powerstats.intelligence,
                    },
                    {
                      name: "Força",
                      value: selectedHeroes[1].powerstats.strength,
                    },
                    {
                      name: "Velocidade",
                      value: selectedHeroes[1].powerstats.speed,
                    },
                    {
                      name: "Durabilidade",
                      value: selectedHeroes[1].powerstats.durability,
                    },
                    {
                      name: "Poder",
                      value: selectedHeroes[1].powerstats.power,
                    },
                    {
                      name: "Combate",
                      value: selectedHeroes[1].powerstats.combat,
                    },
                  ]}
                />
              ) : (
                <DefaultCard />
              )}
              <div className="text-center text-4xl mt-3 border-black  text-white">
                {result.hero2 === 1 ? (
                  <p className="bg-green-500 rounded-lg">Vencedor</p>
                ) : result.hero2 === 0 ? (
                  <p className="bg-red-600 rounded-lg">Perdedor</p>
                ) : result.hero2 === 2 ? (
                  <p className="bg-yellow-500 rounded-lg">Empate</p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="justify-center mt-4">
          <Button
            onClick={() => {
              setSelectedHeroes([HeroDefault, HeroDefault]);
              setResult({ hero1: -1, hero2: -1 });
            }}
            color="danger"
            size="lg"
          >
            Limpar
          </Button>
          <Button onClick={handleBatle} color="primary" size="lg">
            Batalhar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalBatle;

const HeroDefault = {
  id: -1,
  name: "",
  slug: "",
  powerstats: {
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
  },
  appearance: {
    gender: "",
    race: "",
    height: [],
    weight: [],
    eyeColor: "",
    hairColor: "",
  },
  biography: {
    fullName: "",
    alterEgos: "",
    aliases: [],
    placeOfBirth: "",
    firstAppearance: "",
    publisher: "",
    alignment: "",
  },
  work: {
    occupation: "",
    base: "",
  },
  connections: {
    groupAffiliation: "",
    relatives: "",
  },
  images: {
    xs: "",
    sm: "",
    md: "",
    lg: "",
  },
};
