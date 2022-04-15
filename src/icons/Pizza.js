import React from "react";

function PizzaIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      version="1"
      viewBox="0 0 512 512"
    >
      <path
        d="M1095 4794c-68-36-215-131-242-157-33-29-31-79 3-106 15-12 35-21 44-21 10 0 59 27 108 59 50 33 105 67 121 76l31 15 70-140c38-77 70-144 70-148 0-17-97-61-215-97-266-83-325-144-394-410-17-66-43-142-56-170-14-27-72-101-129-163s-114-134-127-160-25-49-26-51c-3-5-186 40-195 48-13 11 71 242 137 379 97 201 201 354 347 509 57 60 68 78 68 107 0 44-41 80-80 71-53-12-250-246-366-435-109-180-238-490-260-626-8-54 18-111 60-130 17-8 204-57 416-109 367-91 387-97 420-129 122-117 313-165 482-121l57 14 323-80c292-72 327-79 361-69 45 13 77 58 77 108 0 20-26 85-71 175-158 313-288 590-265 562 14-16 213-253 443-525l419-495-651-5c-357-3-656-9-663-13-42-27-33-104 14-126 18-8 221-11 705-11 610 0 685 2 715 16 64 30 84 114 42 170-13 17-248 297-523 623s-501 598-503 604c-5 22 102 171 143 199 47 33 135 47 292 48 162 0 167 2 436 144 77 40 95 46 150 46 66 0 92-11 287-118 98-54 172-72 295-72 134-1 233-13 279-35 34-17 116-104 116-125 0-5-14-1-32 7-81 41-217 4-302-80-175-176-118-421 99-421 155-1 315 153 315 302v54l39-49c55-70 103-109 224-181 130-77 162-103 188-155l21-40-29 7c-15 3-60 9-99 12-122 11-253-42-397-161-38-32-76-55-99-59-66-12-178-76-237-135-127-128-177-304-136-480 39-165 174-311 333-361 191-60 379-15 518 124 110 110 170 283 146 421l-9 57 45 19 46 20 17-23c41-54 102-188 106-235 7-68-8-112-81-244-94-169-107-213-112-394-3-82-10-172-16-199-15-70-68-122-211-208-151-91-203-144-294-294-75-124-127-184-178-205-16-7-109-15-205-19-205-9-251-21-402-107-204-115-246-118-416-27-229 123-233 124-458 133-250 10-245 6-424 296-47 77-111 138-200 192-249 151-263 169-269 342l-3 113 23-8c95-30 155-31 244-3 117 36 183 124 173 231-7 73-48 125-131 167-61 32-76 35-150 34-93 0-152-18-209-63l-37-30-40 68c-21 37-49 97-61 132-33 100-32 100-239 100-157 0-179-2-208-20-54-33-66-69-58-174 33-422 170-801 418-1149 85-120 296-340 416-436 249-199 557-350 862-425 187-45 318-60 534-60 211-1 303 9 493 51 178 38 446 137 494 180 28 25 23 77-8 102-15 12-32 21-39 21s-60-20-119-45c-270-113-523-164-809-165-254 0-442 29-676 106-456 150-858 466-1113 877-117 187-224 453-267 662-21 104-41 249-41 297v28h218l30-65c17-35 47-92 67-127 70-119 77-145 85-343 6-149 11-190 30-238 33-88 105-159 246-242 65-38 136-88 159-110s73-92 110-155c146-244 203-277 503-289 205-9 158 6 414-128 172-90 274-90 441-2 51 27 125 66 166 86l73 36 182 8c294 12 357 48 497 286 80 135 127 182 262 262 241 142 274 200 286 498l8 183 35 67c19 38 57 112 85 165 95 181 93 271-8 465l-58 112 83 55c68 44 86 61 96 90 20 62 0 98-83 155-40 26-91 58-114 70-27 13-44 30-47 44-23 118-31 142-64 191-47 69-94 107-226 185-130 77-172 119-242 237-92 156-146 219-223 259-62 32-94 37-271 45-96 5-191 13-210 19s-84 38-145 72c-167 93-195 103-300 103-104 0-143-13-295-99-142-81-161-86-360-95-96-4-189-12-206-18-92-29-159-82-219-172-26-39-50-70-53-69-4 0-45 46-91 101l-85 101 35 29c123 105 406 257 599 322 410 138 840 148 1251 31 396-114 757-349 1020-664 325-388 489-842 489-1346-1-461-136-871-411-1249-88-120-293-327-406-411-92-68-112-98-91-142 19-40 60-52 101-30 56 31 209 159 307 258 366 368 591 852 641 1379 14 147 7 377-16 530-136 899-799 1622-1687 1840-268 66-636 78-900 31-330-59-658-196-917-382-46-33-85-59-86-57-2 2-55 107-118 233-63 127-126 240-140 253-39 36-92 38-152 6zm339-681c33-65 87-178 122-251l63-132-52 39c-29 21-62 44-74 50-17 9-23 21-23 47 0 73-46 143-115 175-133 61-330-44-389-208-8-21-43-67-78-103-98-100-148-218-148-355 0-38 5-87 11-108 6-22 8-41 6-44-6-5-245 52-254 61-10 10 40 76 136 181 108 117 147 188 190 352 62 230 79 247 309 322 86 28 171 60 187 70 17 11 35 20 40 20 6 1 37-52 69-116zm-124-218c32-39-14-141-82-183-54-32-93-37-117-13-27 27-26 46 2 101 43 86 159 141 197 95zm2472-112c22-20 23-42 3-91-29-67-101-122-163-122-92 0-54 146 54 207 47 27 81 29 106 6zm-2293-139c32-29 62-69 83-112 30-60 33-75 33-157s-3-97-33-157c-64-131-178-201-327-202-69-1-89 3-145 30-186 88-263 293-180 481 11 26 30 57 41 69l20 21 30-28c40-37 89-52 158-47 73 5 141 39 199 99 26 26 52 48 58 48 7 1 35-20 63-45zm528-730c-7-7-387 84-399 95-4 4 5 22 20 41 78 96 115 202 116 329v85l135-272c73-150 131-275 128-278zm2381 286c69-27 242-119 242-130 0-9-164-99-229-125-61-25-65-26-74-8-26 48-146 152-216 185l-73 34 60 32c108 58 163 60 290 12zm-330-214c71-36 132-99 168-172 26-53 29-69 29-154-1-83-4-102-28-151-33-67-117-151-184-181-70-32-218-32-287 0-139 64-217 185-217 337 0 90 27 167 83 230 83 94 160 126 293 122 75-3 99-8 143-31zm-2489-779c19-7 43-24 54-39 19-26 19-28 3-53-45-68-187-75-253-13-29 27-29 49 0 76 44 41 126 54 196 29z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
      <path
        d="M1132 3463c-17-6-42-57-42-83 0-31 44-70 79-70 43 0 60 9 77 42 36 70-37 142-114 111zM3705 2759c-43-24-58-75-35-119 13-25 65-41 94-30 30 11 56 47 56 77 0 50-73 95-115 72zM3971 2594c-29-37-26-70 8-105 33-33 50-35 90-14 32 16 41 33 41 74 0 66-98 97-139 45zM2728 4064c-126-30-241-111-310-218-162-251-70-593 194-727 61-31 162-59 214-59 28 0 32-4 43-42 37-123 190-380 237-398 43-17 81-11 113 15 59 51 182 274 221 403 41 135 15 282-70 402-16 23-20 44-20 117 0 148-52 278-149 373-128 124-306 175-473 134zm280-174c126-67 195-180 195-320s-75-262-200-325c-53-27-67-30-158-30-121 0-167 18-249 95-78 74-110 150-110 260-1 72 4 94 27 145 16 33 47 79 70 103 84 86 152 113 277 109 74-3 93-7 148-37zm298-657c19-67 11-125-34-231-31-75-109-212-120-212-17 0-164 287-150 294 2 1 28 13 58 27 70 33 150 96 186 147 16 22 32 38 36 36 4-3 15-30 24-61z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
      <path
        d="M2670 3785c-33-35-31-81 4-112 34-28 65-29 100-2 20 16 26 29 26 59 0 71-82 106-130 55zM2930 3690c-21-21-26-69-10-100 13-24 65-41 93-31 55 21 71 98 28 132-31 25-86 24-111-1zM2833 3530c-47-19-58-92-20-128 40-37 98-28 123 19 34 66-34 138-103 109zM2805 2282c-144-69-154-260-21-396 68-70 124-98 208-104 85-6 146 21 186 81 23 35 27 51 27 116-1 62-6 85-27 126-77 148-256 233-373 177zm155-152c98-50 142-187 66-206-47-12-140 46-172 108-17 33-18 90-2 106 18 18 64 15 108-8zM2125 2195c-193-42-354-203-394-393-55-265 116-534 380-597 307-72 600 143 625 460 20 243-159 479-403 530-82 18-129 18-208 0zm258-169c73-35 138-101 174-174 25-50 28-68 28-152 0-82-4-103-26-150-37-78-87-131-161-171-60-33-67-34-168-34-90 0-112 4-152 24-71 35-131 92-168 163-29 54-35 75-38 148-3 69 0 96 17 142 41 106 127 189 234 224 69 23 193 13 260-20z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
      <path
        d="M2361 1884c-18-8-36-25-42-41-36-94 100-162 146-72 20 38 19 61-5 91-24 32-59 39-99 22zM2039 1860c-29-17-43-66-29-100 15-36 37-50 80-50 41 0 80 39 80 80 0 60-77 101-131 70zM2189 1635c-15-8-32-28-38-45-28-82 73-147 134-85 32 31 32 76 3 109-29 32-66 40-99 21zM3697 2047c-55-18-98-57-132-118-38-71-47-197-20-280 20-59 79-129 129-153 113-54 250 27 292 172 63 215-94 436-269 379zm93-157c30-30 40-63 40-128 0-121-89-182-135-93-36 70-28 168 18 219 25 27 51 28 77 2zM3150 1635c-261-54-371-181-456-529-34-140-32-170 10-212s70-43 213-8c191 47 308 100 388 175 96 91 142 215 152 409l6 116-32 32c-32 32-34 32-124 31-51 0-121-7-157-14zm162-180c-9-129-58-255-117-301-64-49-287-134-351-134h-23l24 90c44 161 97 268 158 314 41 32 130 63 212 75 99 15 101 14 97-44z"
        transform="matrix(.1 0 0 -.1 0 512)"
      ></path>
    </svg>
  );
}

export default PizzaIcon;
