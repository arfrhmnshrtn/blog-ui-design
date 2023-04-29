function FilterSearch() {
    return (
        <>
            <input
            className="bg-transparent rounded border  border-secondary outline-0 p-1 text-light px-2"
            placeholder="Search"
            value={dataSearch}
            onChange={search}
          />
        </>
    )
}