import { resetFields, setField } from "../state/features/form/FormSliceFormOne";
import { useAppDispatch, useAppSelector } from "../state/root";

function FromOne() {
  const { userName, email, petName, favHero } = useAppSelector(
    (state) => state.form
  );
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("from ONE: ", { userName, email, petName, favHero });
    dispatch(resetFields());
  };
  return (
    <div style={{ marginTop: "90px" }}>
      <h2>RTK Typescript Form</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <label htmlFor="userName">
          Username
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) =>
              dispatch(setField({ field: "userName", value: e.target.value }))
            }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) =>
              dispatch(setField({ field: "email", value: e.target.value }))
            }
          />
        </label>
        <label htmlFor="petName">
          PetName
          <input
            type="text"
            id="petName"
            value={petName}
            onChange={(e) =>
              dispatch(setField({ field: "petName", value: e.target.value }))
            }
          />
        </label>
        <label htmlFor="favHero">
          FavHero
          <input
            type="text"
            id="favHero"
            value={favHero}
            onChange={(e) =>
              dispatch(setField({ field: "favHero", value: e.target.value }))
            }
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FromOne;
