"use client";
import { BiSearch } from "react-icons/bi";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useProductContext } from "@/context/ProductContext";

const HeaderSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { products } = useProductContext();
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  // Debounced search function
  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setSelectedIndex(-1);

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    if (value.trim() === "") {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);

    debounceTimer.current = setTimeout(() => {
      const query = value.toLowerCase();
      const filtered = products
        .filter((product: any) => product.name?.toLowerCase().includes(query))
        .slice(0, 6); // Limit to 6 suggestions

      setSuggestions(filtered);
      setIsOpen(filtered.length > 0);
      setIsLoading(false);
    }, 300);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : 0,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : suggestions.length - 1,
        );
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSelectSuggestion(suggestions[selectedIndex]);
        } else if (searchQuery.trim()) {
          handleSearch(searchQuery);
          performSearch();
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const handleSelectSuggestion = (product: any) => {
    router.push(`/product/${product.id}`);
    setSearchQuery("");
    setSuggestions([]);
    setIsOpen(false);
  };

  const performSearch = () => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchedProduct = products.find((product: any) =>
        product.name?.toLowerCase().includes(query),
      );

      if (matchedProduct) {
        router.push(`/product/${matchedProduct.id}`);
        setSearchQuery("");
        setSuggestions([]);
        setIsOpen(false);
      }
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={searchRef} className="relative w-full overflow-visible z-50">
      <div className="relative flex flex-nowrap items-center bg-[#86b642] rounded-[.5rem] shadow-md hover:shadow-lg transition-shadow duration-200">
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => searchQuery && isOpen && setIsOpen(true)}
          className="w-full text-[1.5rem] outline-none border-none p-[1.3rem] font-[400] bg-[#fff] placeholder-green-100 transition-all duration-200"
          placeholder="বইয়ের নাম লিখুন"
        />
        <div
          onClick={performSearch}
          className="text-[#fff] px-[2rem] cursor-pointer"
          aria-label="Search"
        >
          <BiSearch className="text-[2rem]" />
        </div>
      </div>

      {/* Suggestions Dropdown */}
      {isOpen && (
        <div className="absolute inset-x-0 top-full mt-[.8rem] bg-[#fff] w-full p-[.5rem] rounded-[.5rem] shadow-[0_2px_5px_rgba(0,0,0,0.25)] z-[1111] overflow-hidden animate-in fade-in slide-in-from-top-2">
          {isLoading ? (
            <div className="p-[1.6rem] text-center">
              <div className="animate-pulse">সন্ধান করছি...</div>
            </div>
          ) : suggestions.length > 0 ? (
            <div className="max-h-[30rem] overflow-y-auto">
              {suggestions.map((product, index) => (
                <div
                  key={product.id}
                  onClick={() => handleSelectSuggestion(product)}
                  className={`flex items-center gap-[1rem] bg-[#F3F4F6] hover:bg-[#E5E7EB] px-[1.5rem] py-[1rem] cursor-pointer transition duration-150 my-[1rem] rounded-[.5rem]`}
                >
                  <div className="h-[40px] w-[40px] overflow-hidden rounded-lg bg-gray-100 flex-shrink-0">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-gray-200" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm truncate">
                      {product.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-gray-400 text-sm">
              কোনো বই পাওয়া যায়নি
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderSearch;
