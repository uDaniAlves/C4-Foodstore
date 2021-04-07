import React, { ReactNode } from "react";

export interface FoodType {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

export interface HeaderProps {
  openModal: (event) => void;
}

export interface FoodProps {
  key: number;
  food: Food;
  handleDelete: (number) => void;
  handleEditFood: (FoodType) => void;
}

export interface InputProps {
  name: string;
  icon?: any;
  placeholder: string;
}

export interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  setIsOpen: () => void;
}

export interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (FoodType) => void;
}

export interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: FoodType;
  handleUpdateFood: (FoodType) => void;
}