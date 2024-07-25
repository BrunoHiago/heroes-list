import styled from "styled-components";
import SearchInput from "./input";
import { HiSearch } from "react-icons/hi";
import { Input } from "@nextui-org/react";
import Image from "next/image";

const TopbarContainer = styled.div`
  width: 100%;
  background-color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #ecf0f1;
  font-family: "Roboto Slab", serif;
  margin: 0;
  font-size: 34px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  border-radius: 5px;
  padding: 5px 10px;
`;

const BattleButton = styled.button`
  background-color: #e74c3c;
  color: #ecf0f1;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  margin-left: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c0392b;
  }
`;

type TopbarProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onBattleClick: () => void;
};
const Topbar = ({
  searchValue,
  onSearchChange,
  onBattleClick,
}: TopbarProps) => {
  return (
    <TopbarContainer>
      <Title className="flex flex-row gap-4 items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="rounded-full"
        />
        Heroes List
      </Title>
      <div>
        <SearchContainer>
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
            value={searchValue}
            onChange={(e: any) => onSearchChange(e.target.value)}
          />
        </SearchContainer>
        <BattleButton onClick={onBattleClick}>Batalhar</BattleButton>
      </div>
    </TopbarContainer>
  );
};

export default Topbar;
