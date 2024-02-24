import Link from "next/link";
const SortMenu = () => {
  return (
    <>
      <ul className="sort-list dropdown-menu" x-placement="bottom-start">
        <li className="active">
          <Link href={"/"}>Default sorting</Link>
        </li>
        <li>
          <Link href={"/"}>Sort by popularity</Link>
        </li>
        <li>
          <Link href={"/"}>Sort by average rating</Link>
        </li>
        <li>
          <Link href={"/"}>Sort by latest</Link>
        </li>
        <li>
          <Link href={"/"}>Sort by price: low to high</Link>
        </li>
        <li>
          <Link href={"/"}>Sort by price: high to low</Link>
        </li>
      </ul>
    </>
  );
};

export default SortMenu;
