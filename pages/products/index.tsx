import { useContext, useEffect, useState } from "react";
import { AiOutlineCheck, AiOutlineEdit } from "react-icons/ai";
import { VscTrash } from "react-icons/vsc";
import { toast } from "react-toastify";

import { GlobalContext } from "../../src/context/GlobalContext";
import { IProduct } from "../../types";

import Header from "../../src/components/Header";
import FilterInput from "../../src/components/FilterInput";
import NewProductModal from "../../src/components/NewProductModal";
import UpdateProductModal from "../../src/components/UpdateProductModal";

import Container from "./styles";

const Products = (props : any) => {
  const global = useContext(GlobalContext);

  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [createIsOpen, setCreateIsOpen] = useState<boolean>(false);
  const [updateIsOpen, setUpdateIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [productToUpdate, setProductToUpdate] = useState<IProduct>();
  const [selectedProductCategory, setSelectedProductCategory] =
    useState<string>("");

  useEffect(() => {
    setIsDesktop(window !== undefined && window.innerWidth > 720);
  }, []);
  const handleOpenUpdateModal = (product: IProduct, categoryName: string) => {
    setUpdateIsOpen(true);
    setProductToUpdate(product);
    setSelectedProductCategory(categoryName);
  };

  const handleToggleActive = (product: IProduct, chosenIndex: number) => {
    let { categories, ...store } = global.store!;
    let newCategories: any = [];

    categories.map((category, index) => {
      if (index === chosenIndex) {
        let newProducts: any = [];
        category.products.map((mapedProduct) => {
          if (mapedProduct._id === product._id) {
            const { active, ...spreadProduct } = product;
            newProducts.push({ ...spreadProduct, active: !active });
          } else {
            newProducts.push(mapedProduct);
          }
        });
        newCategories.push({ name: category.name, products: newProducts });
      } else {
        newCategories.push(category);
      }
    });

    global.setStore({
      ...store,
      categories: newCategories,
    });
  };

  return (
    <>
      <Header />
      <Container>
        <div className="title-container">
          <h2>Produtos</h2>
          <button onClick={() => setCreateIsOpen(true)}>Adicionar</button>
        </div>
        <FilterInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {global.store!.categories.length === 0 ? (
          <>
            <h4>Não há produtos cadastrados ainda</h4>
          </>
        ) : (
          <div className="wrapper">
            <h5 className="active">Ativos</h5>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  {isDesktop && <th>Grupo</th>}
                  <th>Preço</th>
                </tr>
              </thead>
              <tbody>
                {global
                  .store!.categories.sort((a, b) => {
                    return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
                  })
                  .map((category, index) => {
                    return category.products
                      .sort((a, b) => {
                        return a.name.toLowerCase() < b.name.toLowerCase()
                          ? -1
                          : 1;
                      })
                      .map((product) => {
                        if (
                          product.name
                            .toLowerCase()
                            .match(searchValue.toLowerCase()) &&
                          product.active
                        ) {
                          return (
                            <tr key={product._id}>
                              <td>{product.name}</td>
                              {isDesktop && <td>{category.name}</td>}
                              <td>
                                {new Intl.NumberFormat("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                }).format(product.price)}
                              </td>
                              <td>
                                <AiOutlineEdit
                                  className="icon"
                                  fontSize="24px"
                                  onClick={() =>
                                    handleOpenUpdateModal(
                                      product,
                                      category.name
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <VscTrash
                                  className="icon"
                                  fontSize="24px"
                                  onClick={() =>
                                    handleToggleActive(product, index)
                                  }
                                />
                              </td>
                            </tr>
                          );
                        }
                      });
                  })}
              </tbody>
            </table>
            <div className="separator"></div>
            <h5 className="inactive">Não Ativos</h5>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  {isDesktop && <th>Grupo</th>}
                  <th>Preço</th>
                </tr>
              </thead>
              <tbody>
                {global
                  .store!.categories.sort((a, b) => {
                    return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1;
                  })
                  .map((category, index) => {
                    return category.products
                      .sort((a, b) => {
                        return a.name.toLowerCase() < b.name.toLowerCase()
                          ? -1
                          : 1;
                      })
                      .map((product) => {
                        if (
                          product.name
                            .toLowerCase()
                            .match(searchValue.toLowerCase()) &&
                          !product.active
                        ) {
                          return (
                            <tr key={product._id}>
                              <td>{product.name}</td>
                              {isDesktop && <td>{category.name}</td>}
                              <td>
                                {new Intl.NumberFormat("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                }).format(product.price)}
                              </td>
                              <td>
                                <AiOutlineEdit
                                  className="icon"
                                  fontSize="24px"
                                  onClick={() =>
                                    handleOpenUpdateModal(
                                      product,
                                      category.name
                                    )
                                  }
                                />
                              </td>
                              <td>
                                <AiOutlineCheck
                                  className="icon"
                                  fontSize="24px"
                                  onClick={() =>
                                    handleToggleActive(product, index)
                                  }
                                />
                              </td>
                            </tr>
                          );
                        }
                      });
                  })}
              </tbody>
            </table>
          </div>
        )}
      </Container>
      <NewProductModal
        isOpen={createIsOpen}
        setIsOpen={setCreateIsOpen}
      />

      <UpdateProductModal
        isOpen={updateIsOpen}
        setIsOpen={setUpdateIsOpen}
        categoryName={selectedProductCategory}
        product={productToUpdate!}
        setProductToUpdate={setProductToUpdate}
      />
    </>
  );
};

export async function getStaticProps() {


  return {
    props: {
      protected: true,
    },
  };
}

export default Products;
