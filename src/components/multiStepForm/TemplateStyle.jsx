import LayoutSwitch from "../../atoms/LayoutSwitch";
import InputSelect from "../../atoms/InputSelect";
import ColorSwitch from "../../atoms/ColorSwitch";
import Checkbox from "../../atoms/Checkbox";
import {
  fontFamily,
  color,
  colorsTitle,
  colorsSubtitle,
} from "../../data/optionsData";
import { usePersonalInfo } from "../../store/useGlobalStore";

const TemplateStyle = () => {
  const updateColorTitle = usePersonalInfo((s) => s.updateColorTitle);
  const updateColorSubTitle = usePersonalInfo((s) => s.updateColorSubTitle);
  const brand = usePersonalInfo((s) => s.brand);
  const updateBrand = usePersonalInfo((s) => s.updateBrand);
  const privacy = usePersonalInfo((s) => s.privacy);
  const updatePrivacy = usePersonalInfo((s) => s.updatePrivacy);
  return (
    <div className="w-full flex flex-col gap-4">
      <span className="text-xl text-gray-50">Personalizzazioni</span>
      {/* <LayoutSwitch /> */}
      {/* <InputSelect label="font family" name="font family" options={color} /> */}
      <ColorSwitch
        onChange={updateColorTitle}
        title="Colore Titoli"
        colors={colorsTitle}
      />
      <ColorSwitch
        onChange={updateColorSubTitle}
        title="Colore sotto Titoli"
        colors={colorsSubtitle}
      />
      <Checkbox value={brand} onChange={updateBrand} text="nascondi brand" />
      <Checkbox
        value={privacy}
        onChange={updatePrivacy}
        text="mostra privacy"
      />
    </div>
  );
};

export default TemplateStyle;
