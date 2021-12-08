import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { productData } from "../thunks/logItems";
import { setProductsFilters } from '../actions';
import { useSelector, useDispatch } from "react-redux";
import SelectPagination from "./select";

const Products = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.records.products);
  const { records, filters } = products;

  useEffect(() => {
    dispatch(productData(products.filters));
  }, [dispatch, products.filters]);

  const setFilters = (nextFilters) => {
    dispatch(setProductsFilters(nextFilters));
  };

  return (
    <>
      <Table striped bordered hover size="lg">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Cost</th>
            <th>Quantity</th>
            <th> locationId</th>
          </tr>
        </thead>
        <tbody>
          {records.length
            ? records.map((data) => (
                <tr>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.cost}</td>
                  <td>{data.quantity}</td>
                  <td>{data.locationId}</td>
                </tr>
              ))
            : "Product"}
        </tbody>
      </Table>
      <SelectPagination filters={filters} setFilters={setFilters} />
    </>
  );
};
export default Products;
