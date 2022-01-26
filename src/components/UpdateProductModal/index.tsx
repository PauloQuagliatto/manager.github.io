import { FormEvent, useContext, useEffect, useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { IoMdClose } from "react-icons/io";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { MdAddPhotoAlternate } from "react-icons/md";

import { GlobalContext } from "../../context/GlobalContext";
import { IProduct } from "../../../types";

import { Container } from "./styles";

interface IUpdateProductModal {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  categoryName: string;
  product: IProduct | undefined;
  setProductToUpdate: (product: IProduct | undefined) => void;
}

const UpdateProductModal = ({
  isOpen,
  setIsOpen,
  categoryName,
  product,
  setProductToUpdate,
}: IUpdateProductModal) => {
  const global = useContext(GlobalContext);

  const [formIndex, setFormIndex] = useState<number>(0);
  const [image, setImage] = useState<File>();
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("R$ 0,00");
  const [description, setDescription] = useState<string>("");
  const [productCategory, setProductCategory] = useState<string>(
    global.store!.categories.length > 0 ? global.store!.categories[0].name : ""
  );
  const [hasNewCategory, setHasNewCategory] = useState<boolean>(
    global.store!.categories.length === 0
  );
  const [ncm, setNcm] = useState<string>("");
  const [cest, setCest] = useState<string>("");
  const [icmsIss, setIcmsIss] = useState<string>("");
  const [cfop, setCfop] = useState<string>("");
  const [csosn, setCsosn] = useState<string>("");
  const [fcp, setFcp] = useState<string>("");
  const [pisConfins, setPisConfins] = useState<string>("");
  const [pis, setPis] = useState<string>("");
  const [confins, setConfins] = useState<string>("");

  useEffect(() => {
    if (product) {
      setImage(Object);
      setName(product.name);
      setPrice(
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(product.price)
      );
      setDescription(product.description);
      setProductCategory(categoryName);

      setNcm(product.taxes.ncm ? product.taxes.ncm.toString() : "");
      setCest(product.taxes.cest ? product.taxes.cest.toString() : "");
      setIcmsIss(product.taxes.icmsIss ? product.taxes.icmsIss.toString() : "");
      setCfop(product.taxes.cfop ? product.taxes.cfop.toString() : "");
      setCsosn(product.taxes.csosn ? product.taxes.csosn.toString() : "");
      setFcp(product.taxes.fcp ? product.taxes.fcp.toString() : "");
      setPisConfins(
        product.taxes.pisConfins ? product.taxes.pisConfins.toString() : ""
      );
      setPis(product.taxes.pis ? product.taxes.pis.toString() : "");
      setConfins(product.taxes.confins ? product.taxes.confins.toString() : "");
    }
  }, [product]);

  const onRequestClose = () => {
    setFormIndex(0);
    setImage(undefined);
    setImagePreviewUrl("");
    setName("");
    setDescription("");
    setPrice("R$ 0,00");
    setProductCategory("");
    setHasNewCategory(false);
    setNcm("");
    setCest("");
    setIcmsIss("");
    setCfop("");
    setCsosn("");
    setFcp("");
    setPisConfins("");
    setPis("");
    setConfins("");

    setIsOpen(false);
  };

  const handlePriceValueChange = (e: any) => {
    if (e.target.value) {
      const number = e.target.value.replace(/\D/g, "");
      const actualValue = parseFloat(number) / 100;

      const formatedValue = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(actualValue);

      setPrice(formatedValue);
    } else {
      setPrice(
        new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(0)
      );
    }
  };

  const imageUploadHandler = async (e: any) => {
    setImagePreviewUrl(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleCreateNewProduct = (e: FormEvent) => {
    e.preventDefault();

    const parsedPrice = parseFloat(price.replace(/\D/g, "")) / 100;
    const { categories, ...store } = global.store!;
    const updateProduct: IProduct = {
      _id: product!._id,
      name,
      description,
      price: parsedPrice,
      active: true,
      taxes: {
        ncm: parseInt(ncm),
        cest: parseInt(cest),
        icmsIss: parseInt(icmsIss),
        cfop: parseInt(cfop),
        csosn: parseInt(csosn),
        fcp: parseInt(fcp),
        pisConfins: parseInt(pisConfins),
        pis: parseInt(pis),
        confins: parseInt(confins),
      },
    };

    if (hasNewCategory) {
      let newCategories = [
        ...categories,
        { name: productCategory, products: [updateProduct] },
      ];

      global.setStore({
        categories: newCategories,
        ...store,
      });
    } else {
      let newCategories: any = [];

      categories.map((category) => {
        if (category.name === productCategory) {
          let newProducts: any = [];
          category.products.map((product) => {
            if (product._id === updateProduct._id) {
              newProducts.push(updateProduct);
            } else {
              newProducts.push(product);
            }
          });
          newCategories.push({ name: category.name, products: newProducts });
        } else {
          newCategories.push(category);
        }
      });

      global.setStore({
        categories: newCategories,
        ...store,
      });
    }

    setFormIndex(0);
    setImage(undefined);
    setImagePreviewUrl("");
    setName("");
    setDescription("");
    setPrice("R$ 0,00");
    setProductCategory("");
    setHasNewCategory(false);
    setNcm("");
    setCest("");
    setIcmsIss("");
    setCfop("");
    setCsosn("");
    setFcp("");
    setPisConfins("");
    setPis("");
    setConfins("");
    setProductToUpdate(undefined);

    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <IoMdClose color="#CBCBCB" fontSize="1.8em" />
      </button>
      <Container onSubmit={handleCreateNewProduct}>
        <h2>Atualizar Produto</h2>
        {formIndex === 0 && (
          <>
            <h3>Informações básicas</h3>
            <div>
              <div id="photo-input">
                <label id="image-picker-label" htmlFor="image-picker">
                  {image ? (
                    <Image
                      src={imagePreviewUrl}
                      alt="food-image"
                      height="100%"
                      width="100%"
                      onError={(err) => setImage(undefined)}
                    />
                  ) : (
                    <MdAddPhotoAlternate color="#75249B" fontSize="80px" />
                  )}
                </label>
                <input
                  id={"image-picker"}
                  type="file"
                  name="file"
                  onChange={imageUploadHandler}
                  accept="image/jpg"
                  style={{
                    display: "none",
                  }}
                />
              </div>
              <input
                placeholder="Nome do produto"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <input
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              placeholder="Valor"
              value={price}
              onChange={handlePriceValueChange}
            />
            {hasNewCategory ? (
              <div>
                <input
                  placeholder="Grupo"
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                  className={
                    global.store!.categories.length === 0
                      ? "has-more-space"
                      : "no-more-space"
                  }
                />
                {global.store!.categories.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setHasNewCategory(false)}
                  >
                    -
                  </button>
                )}
              </div>
            ) : (
              <div>
                <select
                  placeholder="Grupo"
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                >
                  {global.store!.categories.map((category, index) => {
                    return (
                      <option
                        key={index}
                        value={category.name}
                        onChange={() => setProductCategory(category.name)}
                      >
                        {category.name}
                      </option>
                    );
                  })}
                </select>
                <button type="button" onClick={() => setHasNewCategory(true)}>
                  +
                </button>
              </div>
            )}
            <div id="arrow-icon-container">
              <div></div>
              <RiArrowRightSLine
                className="functional-icon"
                color="#FFFFFF"
                fontSize="32px"
                onClick={() => setFormIndex(1)}
              />
            </div>
          </>
        )}
        {formIndex === 1 && (
          <>
            <h3>Informações fiscais</h3>
            <p>(Apenas para quem os paga)</p>
            <label>NCM</label>
            <input
              placeholder="NCM"
              value={ncm}
              onChange={(e) => setNcm(e.target.value.replace(/\D/g, ""))}
            />
            <label>CEST</label>
            <input
              placeholder="CEST"
              value={cest}
              onChange={(e) => setCest(e.target.value.replace(/\D/g, ""))}
            />
            <div id="arrow-icon-container">
              <RiArrowLeftSLine
                className="functional-icon"
                color="#FFFFFF"
                fontSize="32px"
                onClick={() => setFormIndex(0)}
              />
              <RiArrowRightSLine
                className="functional-icon"
                color="#FFFFFF"
                fontSize="32px"
                onClick={() => setFormIndex(2)}
              />
            </div>
          </>
        )}{" "}
        {formIndex === 2 && (
          <>
            <label>ICMS/ISS</label>
            <input
              placeholder="ICMS/ISS"
              value={icmsIss}
              onChange={(e) => setIcmsIss(e.target.value.replace(/\D/g, ""))}
            />
            <label>CFOP</label>
            <input
              placeholder="CFOP"
              value={cfop}
              onChange={(e) => setCfop(e.target.value.replace(/\D/g, ""))}
            />
            <label>CSOSN</label>
            <input
              placeholder="CSOSN"
              value={csosn}
              onChange={(e) => setCsosn(e.target.value.replace(/\D/g, ""))}
            />
            <label>FCP</label>
            <input
              placeholder="FCP"
              value={fcp}
              onChange={(e) => setFcp(e.target.value.replace(/\D/g, ""))}
            />
            <div id="arrow-icon-container">
              <RiArrowLeftSLine
                className="functional-icon"
                color="#FFFFFF"
                fontSize="32px"
                onClick={() => setFormIndex(1)}
              />
              <RiArrowRightSLine
                className="functional-icon"
                color="#FFFFFF"
                fontSize="32px"
                onClick={() => setFormIndex(3)}
              />
            </div>
          </>
        )}
        {formIndex === 3 && (
          <>
            <label>PIS/CONFINS</label>
            <input
              placeholder="PIS/CONFINS"
              value={pisConfins}
              onChange={(e) => setPisConfins(e.target.value.replace(/\D/g, ""))}
            />
            <label>PIS</label>
            <input
              placeholder="PIS"
              value={pis}
              onChange={(e) => setPis(e.target.value.replace(/\D/g, ""))}
            />
            <label>CONFINS</label>
            <input
              placeholder="CONFINS"
              value={confins}
              onChange={(e) => setConfins(e.target.value.replace(/\D/g, ""))}
            />
            <div id="arrow-icon-container">
              <RiArrowLeftSLine
                className="functional-icon"
                color="#FFFFFF"
                fontSize="32px"
                onClick={() => setFormIndex(2)}
              />
              <div></div>
            </div>
            <button type="submit">Atualizar</button>
          </>
        )}
      </Container>
    </Modal>
  );
};

export default UpdateProductModal;
