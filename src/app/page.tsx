"use client";
import HeroCard from "@/components/card";
import ModalBatle from "@/components/modalBatle";
import Topbar from "@/components/topBar";
import { getAllHeroes } from "@/services/api";
import { useEffect, useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [allHeroes, setAllHeroes] = useState<Array<Heroes>>([]);
  const [filteredHeroes, setFilteredHeroes] = useState<Array<Heroes>>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchHeroes = async () => {
      await getAllHeroes().then((data) => {
        setAllHeroes(data);
        setFilteredHeroes(data);
      });
    };
    fetchHeroes();
  }, []);

  useEffect(() => {
    setFilteredHeroes(
      allHeroes?.filter((hero) =>
        hero.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, allHeroes]);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <main className="w-screen h-screen overflow-x-hidden">
      <Topbar
        searchValue={search}
        onSearchChange={setSearch}
        onBattleClick={() => setIsOpen(true)}
      />

      <div className="flex flex-row flex-wrap gap-8 justify-center p-6">
        {isOpen && (
          <ModalBatle
            show={isOpen}
            setShow={setIsOpen}
            hero={filteredHeroes[0]}
            allHeroes={allHeroes}
          />
        )}
        {filteredHeroes
          ?.filter((hero) =>
            hero.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((hero) => (
            <HeroCard
              key={hero.id}
              name={hero.name}
              bgImage={hero.images.sm}
              attributes={[
                { name: "Inteligência", value: hero.powerstats.intelligence },
                { name: "Força", value: hero.powerstats.strength },
                { name: "Velocidade", value: hero.powerstats.speed },
                { name: "Durabilidade", value: hero.powerstats.durability },
                { name: "Poder", value: hero.powerstats.power },
                { name: "Combate", value: hero.powerstats.combat },
              ]}
            />
          ))}
      </div>
    </main>
  );
};

export default Home;
