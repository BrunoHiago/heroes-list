import {
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import HeroCard from "./card";
import { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";

type ModalHeroesProps = {
  show: boolean;
  setShow: (show: boolean) => void;
  onSelectHero: (hero: Heroes) => void;
  allHeroes: Array<Heroes>;
};

const ModalHeroes = ({
  show,
  setShow,
  onSelectHero,
  allHeroes,
}: ModalHeroesProps) => {
  const [search, setSearch] = useState("");
  const [filteredHeroes, setFilteredHeroes] =
    useState<Array<Heroes>>(allHeroes);

  useEffect(() => {
    setFilteredHeroes(
      allHeroes?.filter((hero) =>
        hero.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, allHeroes]);

  const handleSelectHero = (hero: Heroes) => () => {
    onSelectHero(hero);
    setShow(false);
  };

  return (
    <Modal
      isOpen={show}
      onOpenChange={setShow}
      size="5xl"
      scrollBehavior="inside"
      backdrop="blur"
    >
      <ModalContent className="bghero">
        <ModalHeader className="text-black p-8">
          <Input
            classNames={{
              label: "text-white text-lg ",
              input: [
                "bg-transparent",
                "text-white/90 dark:text-white/90",
                "placeholder:text-white text-lg",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focus=true]:bg-default-200/50",
                "dark:group-data-[focus=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            type="text"
            label="Pesquisar"
            placeholder="Pesquisar aqui..."
            labelPlacement="outside"
            color="secondary"
            startContent={
              <HiSearch className="text-2xl text-white-900 pointer-events-none flex-shrink-0" />
            }
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </ModalHeader>
        <ModalBody>
          <div className="flex flex-row flex-wrap gap-5 justify-center mt-4">
            {filteredHeroes
              ?.filter((hero) =>
                hero.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((hero) => (
                <div
                  key={hero.id}
                  onClick={handleSelectHero(hero)}
                  className="cursor-pointer"
                >
                  <HeroCard
                    key={hero.id}
                    name={hero.name}
                    bgImage={hero.images.sm}
                    attributes={[
                      {
                        name: "Inteligência",
                        value: hero.powerstats.intelligence,
                      },
                      { name: "Força", value: hero.powerstats.strength },
                      { name: "Velocidade", value: hero.powerstats.speed },
                      {
                        name: "Durabilidade",
                        value: hero.powerstats.durability,
                      },
                      { name: "Poder", value: hero.powerstats.power },
                      { name: "Combate", value: hero.powerstats.combat },
                    ]}
                  />
                </div>
              ))}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalHeroes;
