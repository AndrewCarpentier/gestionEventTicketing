import { useTranslation } from "react-i18next";

function Search({  tabBackUp, setTab, onSearch }) {
  const { t } = useTranslation();

    function onChange(e){
        if(e.target.value === ""){
            onSearch(false);
            setTab(tabBackUp)
        }else{
            onSearch(true);
            setTab(tabBackUp.filter(
                (u) =>
                  u.id.toString().includes(e.target.value) ||
                  u.lastname.toLowerCase().includes(e.target.value.toLowerCase()) ||
                  u.firstname.toLowerCase().includes(e.target.value.toLowerCase()) ||
                  u.mail.toLowerCase().includes(e.target.value.toLowerCase())
              ))
        }
    }

  return (
    <div>
      <input onChange={onChange}  placeholder={t("search") + "..."} />
    </div>
  );
}

export default Search;
